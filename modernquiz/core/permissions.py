from rest_framework.permissions import BasePermission


class IsTeacher(BasePermission):

    def has_permission(self, request, view):
        return request.user.profile.user_type == 'teacher'