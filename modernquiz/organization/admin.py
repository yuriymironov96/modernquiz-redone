from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from organization.models import Teacher, Student
from organization.resources import StudentResource


class StudentAdmin(ImportExportModelAdmin):
    resource_class = StudentResource


admin.site.register(Teacher)
admin.site.register(Student, StudentAdmin)