from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Emergency(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('responding', 'Responding'),
        ('resolved', 'Resolved'),
    ]

    reporter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="emergencies")
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.status}"
