from rest_framework import serializers
from .models import Emergency, Incident
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff']

class EmergencySerializer(serializers.ModelSerializer):
    reported_by = UserSerializer(read_only=True)

    class Meta:
        model = Emergency
        fields = '__all__'

class IncidentSerializer(serializers.ModelSerializer):
    emergency = EmergencySerializer()
    responder = UserSerializer()

    class Meta:
        model = Incident
        fields = '__all__'
