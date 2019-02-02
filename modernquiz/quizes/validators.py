from django.core.exceptions import ValidationError


def single_correct_choice(self, answer):
    correct_answers = self.question.choices.exclude(id=answer.id).filter(
        is_correct=True
    ).count()
    if not correct_answers and not answer.is_correct:
        raise ValidationError({
            'is_correct': 'There must at least one correct choice for a question'
        })
    if self.question.question_type == 'single_choice':
        if correct_answers and answer.is_correct:
            raise ValidationError({
                'is_correct': 'There must be only one correct choice for single choice question'
            })