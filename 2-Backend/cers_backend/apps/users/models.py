from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models

class CustomUserManager(BaseUserManager):
    
    def create_user(self, identifier, first_name, last_name, email=None, password=None, role="user", **extra_fields):
    
        if not identifier:
            raise ValueError("An identifier is required.")

        email = self.normalize_email(email) if email else None  # Normalize email

        user = self.model(
            identifier=identifier, 
            first_name=first_name, 
            last_name=last_name, 
            email=email, 
            role=role,  # Assign role dynamically
            **extra_fields
        )
        user.set_password(password)  # Hash password
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    
    ROLE_CHOICES = [
        ('user', 'User'),
        ('admin', 'Admin'),
        ('responder', 'Responder'),
    ]

    identifier = models.CharField(max_length=255, unique=True, help_text="Student ID, Staff ID, or Email.")
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True, blank=True, null=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    is_active = models.BooleanField(default=True)  # Active status (Django requirement)

    # related_name to prevent conflicts
    groups = models.ManyToManyField(Group, related_name="customuser_set", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_set", blank=True)    

    objects = CustomUserManager()

    USERNAME_FIELD = 'identifier'  
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.identifier}) - {self.role}"

