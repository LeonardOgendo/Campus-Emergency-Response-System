from django.db import models
from django.conf import settings
from apps.emergencies.models import Emergency

class Incident(models.Model):
    emergency = models.OneToOneField(
        Emergency,
        on_delete=models.CASCADE,
        related_name='incident'
    )
    is_verified = models.BooleanField(default=False)
    responders = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='responded_incidents',
        blank=True
    )
    notes = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Incident for {self.emergency}"