from django.db import models
from django.utils import timezone


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
    quiz = models.ForeignKey(
        'quizes.Quiz',
        on_delete=models.CASCADE
    )
    passing_date = models.DateTimeField(
        default=timezone.now,
    )
    total_points = models.IntegerField()
    is_repassing_allowed = models.BooleanField(
        default=False
    )
