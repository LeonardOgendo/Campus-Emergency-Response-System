from django.db import models
from django.conf import settings  # For AUTH_USER_MODEL


class Incident(models.Model):
    INCIDENT_TYPES = [
        ('accident', 'Accident'),
        ('violence', 'Violence'),
        ('theft', 'Theft'),
        ('vandalism', 'Vandalism'),
    ]

    STATUS_CHOICES = [
        ('reported', 'Reported'),
        ('investigating', 'Investigating'),
        ('closed', 'Closed'),
    ]

    # Required Fields
    title = models.CharField(
        max_length=200,
        help_text="A brief title describing the incident"
    )
    incident_type = models.CharField(
        max_length=20,
        choices=INCIDENT_TYPES,
        help_text="Type of incident"
    )
    description = models.TextField(
        help_text="Detailed description of what happened"
    )
    location = models.CharField(  # Added missing location field
        max_length=255,
        help_text="Where the incident occurred"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='reported',
        help_text="Current status of the incident"
    )

    # Relationships
    reporter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='reported_incidents',
        help_text="User who reported this incident"
    )

    # Timestamps
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="When this incident was first reported"
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text="When this incident was last updated"
    )

    class Meta:
        ordering = ['-created_at']  # Newest first by default
        verbose_name = 'Incident Report'
        verbose_name_plural = 'Incident Reports'

    def __str__(self):
        return f"{self.title} ({self.get_incident_type_display()}) at {self.location}"

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('incident-detail', args=[str(self.id)])