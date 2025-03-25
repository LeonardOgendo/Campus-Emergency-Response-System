from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Emergency
from .serializers import EmergencySerializer

class EmergencyCreateView(generics.CreateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(reporter=self.request.user)

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response({
            "message": "Emergency report received! Our team is responding.",
            "data": response.data
        }, status=201)

class UserEmergencyListView(generics.ListAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Emergency.objects.filter(reporter=self.request.user).order_by('-created_at')