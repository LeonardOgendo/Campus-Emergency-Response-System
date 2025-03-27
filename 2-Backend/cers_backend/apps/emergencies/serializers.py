from rest_framework import serializers
from .models import Emergency

class EmergencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Emergency
        fields = ['id', 'user', 'emergency_type', 'description', 'severity',
                 'latitude', 'longitude', 'created_at', 'status']
        read_only_fields = ['id', 'created_at', 'status', 'user']