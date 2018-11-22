from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from organization.models import Teacher, Student, StudentQuizResult
from organization.resources import StudentResource
from quizes.models import Answer


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 0


class StudentQuizResultAdmin(ImportExportModelAdmin):
    model = StudentQuizResult
    inlines = [
        AnswerInline,
    ]


class StudentAdmin(ImportExportModelAdmin):
    resource_class = StudentResource


admin.site.register(Teacher)
admin.site.register(Student, StudentAdmin)
admin.site.register(StudentQuizResult, StudentQuizResultAdmin)