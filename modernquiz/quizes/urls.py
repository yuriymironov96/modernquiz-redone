from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from quizes import views


urlpatterns = [
    url(r'^quizes/create_from_xml/$', views.create_quiz_from_xml),
    url(r'^quizes/$', views.QuizListAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)