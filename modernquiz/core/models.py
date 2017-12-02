from django.db import models

USER_TYPES = (
    ('student', 'Student'),
    ('teacher', 'Teacher'),
    ('tech_staff', 'Technical Staff')
)

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(
        'auth.User',
        on_delete=models.CASCADE,
    )
    user_type = models.CharField(
        choices=USER_TYPES,
        default='student',
        max_length=30
    )
    group = models.ForeignKey(
        'organization.Group',
        null=True,
        blank=True,
    )