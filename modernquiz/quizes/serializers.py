from rest_framework import serializers

from quizes.models import Quiz


class QuizFullSerializer(serializers.ModelSerializer):
    question_count = serializers.ReadOnlyField()

    class Meta:
        model = Quiz
        fields = (
            'id', 'title', 'description', 'is_public', 'question_count',
        )


class QuizLightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = ('title', 'description')