from django.apps import apps
from django.db import models


class QuizManager(models.Manager):

    def create_from_xml(self, parsed_file):

        Question = apps.get_model('quizes', 'Question')
        Choice = apps.get_model('quizes', 'Choice')

        new_quiz = self.create(
            title=parsed_file.get('title'),
            description=parsed_file.get('description')
        )
        for raw_question in parsed_file.get('questions', []):
            new_question = Question.objects.create(
                question_type=raw_question.get('type'),
                question_text=raw_question.get('body'),
                quiz=new_quiz
            )
            for raw_answer in raw_question.get('answers', []):
                answer = Choice.objects.create(
                    is_correct=raw_answer.get('correct'),
                    choice_text=raw_answer.get('text'),
                    question=new_question
                )
        
        return new_quiz

    

