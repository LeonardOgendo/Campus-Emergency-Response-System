from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, required=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'identifier', 'first_name', 'last_name', 'email', 'role', 'password']
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser.objects.create_user(password=password, **validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(identifier=data['identifier'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials, please try again')
        
        if not user.is_active:
            raise serializers.ValidationError('Your account is inactive. Contact support.')

        return user