from rest_framework import serializers
from .models import Emergency


class EmergencySerializer(serializers.ModelSerializer):
    reporter_name = serializers.CharField(source='reporter.get_full_name', read_only=True)

    class Meta:
        model = Emergency
        fields = '__all__'
        read_only_fields = ('reporter', 'status', 'created_at', 'updated_at')