from django.db import models

from quizes.managers import QuizManager


class Quiz(models.Model):
    objects = QuizManager()
    
    title = models.CharField(
        max_length=200
    )
    description = models.TextField(
        null=True,
        blank=True
    )
    is_public = models.BooleanField(
        default=False
    )
    create_time = models.DateTimeField(
        auto_now_add=True
    )
    update_time = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        verbose_name_plural = 'Quizes'
    
    def __str__(self):
        return 'Quiz {}'.format(self.title)


class Question(models.Model):
    QUESTION_TYPES = (
        ('single_choice', 'Single choice'),
        ('multiple_choice', 'Multiple choice')
    )
    quiz = models.ForeignKey(
        'quizes.Quiz',
        on_delete=models.CASCADE,
        related_name='questions',
    )
    question_type = models.CharField(
        choices=QUESTION_TYPES,
        default='single_choice',
        max_length=50
    )
    question_text = models.TextField()
    image = models.ImageField(
        upload_to='',
        null=True,
        blank=True,
    )

    def __str__(self):
        return 'Question {}, quiz {}'.format(self.id, self.quiz_id)
    

class Choice(models.Model):
    question = models.ForeignKey(
        'quizes.Question',
        on_delete=models.CASCADE,
        related_name='choices',
    )
    is_correct = models.BooleanField(
        default=False
    )
    choice_text = models.TextField()
    image = models.ImageField(
        upload_to='',
        null=True,
        blank=True,
    )

    def __str__(self):
        return 'Choice {}, question {}'.format(self.id, self.question_id)