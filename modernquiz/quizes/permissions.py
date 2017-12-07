from rest_framework import permissions

from core.models import UserProfile


class TeacherPermission(permissions.BasePermission):
    message = 'Only teachers are allowed.'

    def has_permission(self, request, view):
        profile = UserProfile.objects.filter(user_id=request.user.id).first()
        if profile and profile.user_type == 'teacher':
            return True
        return False