from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers

from quizes import views


router = routers.DefaultRouter()
router.register(r'quizes', views.QuizListAPIView, base_name='quizes')

urlpatterns = [
    url(r'^quizes/create_from_xml/$', views.create_quiz_from_xml),
    url(r'^quizes/generate_creds/$', views.generate_creds),
]

urlpatterns += router.urls