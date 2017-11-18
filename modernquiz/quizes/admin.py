from django.contrib import admin

from quizes.models import Quiz, Question, Choice


class ChoiceInline(admin.TabularInline):
    model = Choice


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


class QuestionAdmin(admin.ModelAdmin):
    inlines = [
        ChoiceInline,
    ]


class QuizAdmin(admin.ModelAdmin):
    inlines = [
        QuestionInline,
    ]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Quiz, QuizAdmin)
