from rest_framework import serializers
from .models import Incident
from apps.emergencies.serializers import EmergencySerializer

class IncidentSerializer(serializers.ModelSerializer):
    emergency = EmergencySerializer(read_only=True)

    class Meta:
        model = Incident
        fields = ['id', 'emergency', 'is_verified', 'responders', 'notes']
        read_only_fields = ['id']