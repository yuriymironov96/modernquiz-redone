from django.shortcuts import render

from core.permissions import IsTeacher

# Create your views here.
class TeacherOnlyMixin:
    permission_classes = (IsTeacher, )