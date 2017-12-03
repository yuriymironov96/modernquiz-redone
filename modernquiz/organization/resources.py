from django.db import models
from django.contrib.auth.models import User
from import_export import resources

from organization.models import Teacher, Student


class StudentResource(resources.ModelResource):

    def before_import_row(self, row, **kwargs):
        count = User.objects.filter(
            models.Q(
                username=row.get('username')
            ) | models.Q(
                email=row.get('email')
            )
        ).distinct().count()
        if not row.get('id') and count:
            raise Exception('User with such username or email already exists')
    
    class Meta:
        model = Student
        fields = (
            'id', 'username', 'first_name', 'last_name', 'email', 'group_name'
        )