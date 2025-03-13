from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, get_user_model
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication

User = get_user_model()

# ✅ Register User
class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# ✅ Login User
class LoginUserView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "").strip().lower()
        password = request.data.get("password")

        if not username or not password:
            return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "message": "Login successful",
                    "token": token.key,
                    "role": "admin" if user.is_admin else "user",
                    "username": user.username
                },
                status=status.HTTP_200_OK
            )

        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


# ✅ Logout User
class LogoutUserView(APIView):
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        request.auth.delete()
        return Response({"message": "Successfully logged out"}, status=status.HTTP_200_OK)
