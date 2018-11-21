from django.db import models
from django.contrib.auth.models import User
from rest_framework.decorators import (
    api_view, permission_classes, parser_classes)
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response

from core.models import UserProfile
from core.views import TeacherOnlyMixin
from quizes.models import Quiz, Question, Answer
from quizes.serializers import QuizFullSerializer, QuizLightSerializer
from quizes.permissions import TeacherPermission
from quizes.utils import parse_quiz
from organization.models import StudentQuizResult


class QuizListAPIView(ModelViewSet):
    model = Quiz

    def _is_teacher(self, user):
        if not user.id:
            return True
        profile = UserProfile.objects.filter(user=user).first()
        if profile and profile.user_type == 'teacher':
            return True
        return False

    def get_queryset(self):
        if self._is_teacher(self.request.user):
            return Quiz.objects.annotate(
                question_count=models.Count(
                    'questions'
                )
            ).all()
        return Quiz.objects.filter(
            is_public=True,
            studentquizresult__is_active=True,
            studentquizresult__student__user=self.request.user,
        ).distinct()
    
    def get_serializer_class(self):
        if self._is_teacher(self.request.user):
            return QuizFullSerializer
        return QuizLightSerializer


class QuestionListAPIView(ModelViewSet, TeacherOnlyMixin):
    model = Question
    page_size = 100


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def create_quiz_from_xml(request):
    
    Quiz.objects.create_from_xml(
        parse_quiz(
            request.data['quizFile'].read()
        )
    )

    return Response({'status': 'OK'})


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def generate_creds(request):

    response_body = {
        'creds': []
    }
    
    students = User.objects.filter(
        userprofile__user_type='student'
    ).exclude(
        userprofile__studentquizresult__is_repassing_allowed=False,
        userprofile__studentquizresult__quiz_id=request.data.get('quiz_id')
    ).select_related('userprofile')

    for student in students:
        password = User.objects.make_random_password()
        student.set_password(password)
        student.save()
        StudentQuizResult.objects.create(
            student_id=student.userprofile.id,
            quiz_id=request.data.get('quiz_id'),
            is_active=True,
            questions_amount=request.data.get('questions_number')
        )
        response_body['creds'].append({
            'first_name': student.first_name,
            'last_name': student.last_name,
            'username': student.username,
            'password': password,
        })
        

    return Response(response_body)
    

@api_view(['POST'])
def generate_quiz(request):

    response_body = {
        'token': request.data.get('token'),
        'questions': []
    }

    quiz_result = StudentQuizResult.objects.filter(
        personal_link=request.data.get('token')
    ).select_related(
        'quiz'
    ).prefetch_related(
        'quiz__questions'
    ).latest(
        'passing_date'
    )

    questions = quiz_result.quiz.questions.order_by('?')
    questions = questions[0:quiz_result.questions_amount]

    for question in questions:
        response_body['questions'].append({
            'question_id': question.id,
            'question_type': question.question_type,
            'question_text': question.question_text,
            'answer_text': '',
            'question_image': question.image.name,
            'answers': [{
                'id': answer['id'],
                'question_id': answer['question_id'],
                'choice_text': answer['choice_text'],
                'answer_image': answer['image'],
            } for answer in question.choices.values('id', 'question_id', 'choice_text', 'image')]
        })

    return Response(response_body)
    

def _is_matching_answer(answer_id, student_answer):
    if answer_id == student_answer:
        return True
    if type(student_answer) is list and answer_id in student_answer:
        return True
    return False


@api_view(['POST'])
def submit_results(request):

    quiz_result = StudentQuizResult.objects.filter(
        personal_link=request.data.get('token')
    ).select_related(
        'quiz'
    ).latest(
        'passing_date'
    )

    quiz_result.is_active = False
    quiz_result.total_points = 0

    questions = quiz_result.quiz.questions.filter(
        id__in=request.data['quiz'].keys()
    )

    for question in questions:
        if question.question_type == 'freetext':
            student_is_correct = False
            answer = Answer(studentQuizResult=quiz_result, question=question)
            answer.answer_text
            answer.save()
        else:
            student_is_correct = True
            for answer in question.choices.all():
                if not _is_matching_answer(
                        answer.id, request.data['quiz'][str(question.id)]) and \
                        answer.is_correct:
                    student_is_correct = False
        if student_is_correct:
            quiz_result.total_points += 1
    quiz_result.save()

    response_body = {
        'student_mark': quiz_result.total_points,
        'max_mark': quiz_result.questions_amount
    }
    return Response(response_body)


@api_view(['GET'])
@permission_classes([TeacherPermission,])
def view_results(request, id):

    results = StudentQuizResult.objects.filter(
        quiz_id=id,
        total_points__gt=0
    ).distinct(
        'student'
    ).values(
        'student__user__username',
        'student__user__first_name',
        'student__user__last_name',
        'student__user__email',
        'total_points',
        'questions_amount'
    )
                
    response_body = {
        'results': results
    }

    return Response(response_body)


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def allow_repassing(request, id):

    StudentQuizResult.objects.filter(
        quiz_id=id
    ).delete()
                
    response_body = {
        'status': 'OK'
    }

    return Response(response_body)
