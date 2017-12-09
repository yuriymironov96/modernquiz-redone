from rest_framework.decorators import (
    api_view, permission_classes, parser_classes)
from rest_framework.generics import ListAPIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response

from core.models import UserProfile
from quizes.models import Quiz
from quizes.serializers import QuizSerializer
from quizes.permissions import TeacherPermission
from quizes.utils import parse_quiz


class QuizListAPIView(ListAPIView):
    model = Quiz
    serializer_class = QuizSerializer

    def _is_teacher(self, user):
        profile = UserProfile.objects.filter(user=user).first()
        if profile and profile.user_type == 'teacher':
            return True
        return False

    def get_queryset(self):
        if self._is_teacher(self.request.user):
            return Quiz.objects.all()
        return Quiz.objects.filter(
            is_public=True
        )


@api_view(['POST'])
@permission_classes([TeacherPermission,])
def create_quiz_from_xml(request):
    
    Quiz.objects.create_from_xml(
        parse_quiz(
            request.data['quizFile'].read()
        )
    )

    return Response({'status': 'OK'}, headers={'Access-Control-Allow-Origin': '*'})