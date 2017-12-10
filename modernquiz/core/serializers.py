from django.contrib.auth.models import User
from rest_framework import serializers


class CurrentUserSerializer(serializers.ModelSerializer):
    user_type = serializers.ReadOnlyField(source='userprofile.user_type')


    class Meta:
        model = User
        fields = ('username', 'user_type')