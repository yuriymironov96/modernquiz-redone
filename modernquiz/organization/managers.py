from django.contrib.auth import models


class TeacherManager(models.UserManager):
    
    def get_queryset(self):
        return super(TeacherManager, self).get_queryset().filter(
            userprofile__user_type='teacher'
        )


class StudentManager(models.UserManager):

    def get_queryset(self):
        return super(StudentManager, self).get_queryset().filter(
            userprofile__user_type='student'
        )

