from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        ("Custom Fields", {"fields": ("phone_number", "is_admin", "is_user")}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
