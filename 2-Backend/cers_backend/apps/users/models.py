from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True, blank=True, null=True)
    is_admin = models.BooleanField(default=False)  # Admin role
    is_user = models.BooleanField(default=True)  # Normal user role

    def __str__(self):
        return self.username
