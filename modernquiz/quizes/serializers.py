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
    personal_link = serializers.SerializerMethodField()
    published_question_count = serializers.SerializerMethodField()


    class Meta:
        model = Quiz
        fields = (
            'title', 'description', 'personal_link', 'published_question_count', 'id'
        )

    def get_personal_link(self, obj):
        return obj.studentquizresult_set.filter(
            student__user=self.context['request'].user,
            is_active=True
        ).latest('passing_date').personal_link

    def get_published_question_count(self, obj):
        return obj.studentquizresult_set.filter(
            student__user=self.context['request'].user,
            is_active=True
        ).latest('passing_date').questions_amount