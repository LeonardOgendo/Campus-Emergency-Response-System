from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Emergency(models.Model):
    EMERGENCY_TYPES = [
        ('health', 'Health'),
        ('security', 'Security'),
        ('fire', 'Fire'),
    ]

    SEVERITY_CHOICES = [
        ('low', 'Low'),
        ('high', 'High'),
        ('critical', 'Critical'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('responded', 'Responded'),
        ('resolved', 'Resolved'),
    ]

    reporter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='emergencies')
    emergency_type = models.CharField(max_length=20, choices=EMERGENCY_TYPES)
    description = models.TextField()
    severity = models.CharField(max_length=20, choices=SEVERITY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    image = models.ImageField(upload_to='emergency_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.get_emergency_type_display()} Emergency ({self.status})"
