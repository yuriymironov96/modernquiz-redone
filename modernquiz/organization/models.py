import uuid

from django.db import models
from django.utils import timezone
from django.contrib import auth

from organization.managers import TeacherManager, StudentManager
from core.models import UserProfile


class Teacher(auth.models.User):
    objects = TeacherManager()

    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        super(Teacher, self).save(*args, **kwargs)
        UserProfile.objects.get_or_create(
            user_id=self.id,
            defaults={
                'user_type': 'teacher'
            })


class Student(auth.models.User):
    objects = StudentManager()

    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        super(Student, self).save(*args, **kwargs)
        UserProfile.objects.get_or_create(
            user_id=self.id,
            defaults={
                'user_type': 'student'
            })


class Subject(models.Model):
    title = models.CharField(
        max_length=50
    )
    teachers = models.ManyToManyField(
        'core.UserProfile',
        limit_choices_to={
            'user_type': 'teacher'
        }
    )


class Group(models.Model):
    title = models.CharField(
        max_length=10
    )


class StudentQuizResult(models.Model):
    student = models.ForeignKey(
        'core.UserProfile',
        on_delete=models.CASCADE,
        limit_choices_to={
            'user_type': 'student'
        }
    )
    personal_link = models.UUIDField(
        default=uuid.uuid4,
        editable=False
    )
    quiz = models.ForeignKey(
        'quizes.Quiz',
        on_delete=models.CASCADE
    )
    passing_date = models.DateTimeField(
        default=timezone.now,
    )
    total_points = models.IntegerField(
        default=0
    )
    is_repassing_allowed = models.BooleanField(
        default=False
    )
    is_active = models.BooleanField(
        default=False
    )
    questions_amount = models.IntegerField()
