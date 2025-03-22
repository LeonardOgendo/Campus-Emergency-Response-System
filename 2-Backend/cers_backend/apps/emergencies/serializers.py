from rest_framework import serializers
from .models import EmergencyReport

class EmergencyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyReport
        fields = '__all__'
