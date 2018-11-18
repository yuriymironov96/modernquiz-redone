from django.db import models
from django.contrib.auth.models import User
from import_export import resources

from organization.models import Teacher, Student


class StudentResource(resources.ModelResource):
    
    class Meta:
        model = Student
        import_id_fields = ('username', 'email')
        fields = (
            'username', 'first_name', 'last_name', 'email', 'group_name'
        )