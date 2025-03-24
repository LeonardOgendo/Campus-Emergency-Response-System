from rest_framework import serializers
from django.contrib.auth import authenticate
from django.core.validators import RegexValidator
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        required=True,
        style={"input_type": "password"}  # Hides password input in forms/browsable API
    )

    identifier = serializers.CharField(
        required=True,
        validators=[RegexValidator(
            regex=r'^(STU|STAFF)/\d+$',
            message="Invalid identifier format. Must be STU/XXXXX or STAFF/XXXXX."
        )]
    )

    class Meta:
        model = CustomUser
        fields = ['id', 'identifier', 'first_name', 'last_name', 'email', 'role', 'password']

    def validate_email(self, value):
        if value and CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def validate_password(self, value):
        validate_password(value)  # Uses Django's built-in password validators
        return value

    def create(self, validated_data):
        password = validated_data.pop("password")
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