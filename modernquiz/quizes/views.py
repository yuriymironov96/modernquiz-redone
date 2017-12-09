from django.db import models
from django.contrib.auth.models import User
from rest_framework.decorators import (
    api_view, permission_classes, parser_classes)
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response

from core.models import UserProfile
from quizes.models import Quiz
from quizes.serializers import QuizFullSerializer, QuizLightSerializer
from quizes.permissions import TeacherPermission
from quizes.utils import parse_quiz


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
            is_public=True
        )
    
    def get_serializer_class(self):
        if self._is_teacher(self.request.user):
            return QuizFullSerializer
        return QuizLightSerializer


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def create_quiz_from_xml(request):
    
    Quiz.objects.create_from_xml(
        parse_quiz(
            request.data['quizFile'].read()
        )
    )

    return Response({'status': 'OK'}, headers={
        'Access-Control-Allow-Origin': '*'
    })


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def generate_creds(request):

    response_body = {
        'creds': []
    }
    
    students = User.objects.filter(userprofile__user_type='student')

    for student in students:
        password = User.objects.make_random_password()
        student.set_password(password)
        student.save()
        response_body['creds'].append({
            'first_name': student.first_name,
            'last_name': student.last_name,
            'username': student.username,
            'password': password,
        })

    return Response(response_body, headers={
        'Access-Control-Allow-Origin': '*'
    })