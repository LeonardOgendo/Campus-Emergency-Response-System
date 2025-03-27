from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models

class CustomUserManager(BaseUserManager):

    def create_user(self, identifier, first_name, last_name, email=None, password=None, role="user", **extra_fields):
        if not identifier:
            raise ValueError("An identifier is required.")

        email = self.normalize_email(email) if email else None
        user = self.model(
            identifier=identifier,
            first_name=first_name,
            last_name=last_name,
            email=email,
            role=role,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, identifier, first_name, last_name, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(identifier, first_name, last_name, email, password, role="admin", **extra_fields)


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
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group, blank=True, related_name="customuser_set")
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name="customuser_permissions_set")

    objects = CustomUserManager()

    USERNAME_FIELD = 'identifier'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.identifier}) - {self.role}"


LOCATION_CHOICES = [
    ('Lurambi', 'Lurambi'),
    ('Koromatangi', 'Koromatangi'),
    ('Mwiyala', 'Mwiyala'),
    ('Teazone', 'Teazone'),
    ('Kefinco', 'Kefinco'),
    ('Sichirai', 'Sichirai'),
    ('Mulunyu', 'Mulunyu'),
    ('Laposada', 'Laposada'),
]

class UserProfile(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    location = models.CharField(
        max_length=50,
        choices=LOCATION_CHOICES,
        blank=True,
        null=True
    )
    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.first_name}'s Profile"