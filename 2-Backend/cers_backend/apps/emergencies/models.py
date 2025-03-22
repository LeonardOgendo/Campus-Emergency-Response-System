from django.db import models

class EmergencyReport(models.Model):
    EMERGENCY_TYPES = [
        ('health', 'Health'),
        ('security', 'Security'),
        ('fire', 'Fire'),
    ]
    SEVERITY_LEVELS = [
        ('critical', 'Critical'),
        ('high', 'High'),
        ('low', 'Low'),
    ]

    emergency_type = models.CharField(max_length=50, choices=EMERGENCY_TYPES)
    description = models.TextField()
    severity = models.CharField(max_length=50, choices=SEVERITY_LEVELS)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.emergency_type} - {self.severity}"
