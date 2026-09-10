from django.db import models
from django.conf import settings  # Use AUTH_USER_MODEL

class Emergency(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved')
    ]

    reported_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reported_emergencies"
    )
    description = models.TextField()
    location = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"Emergency {self.id} - {self.status}"


class Incident(models.Model):
    emergency = models.ForeignKey(Emergency, on_delete=models.CASCADE, related_name="incidents")
    responder = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="incidents_handled"
    )
    response_notes = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Resolved', 'Resolved')], default='Pending')

    def __str__(self):
        return f"Incident {self.id} - {self.status}"
