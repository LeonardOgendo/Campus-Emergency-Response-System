from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Emergency
from .serializers import EmergencySerializer

# Report an emergency (only authenticated users)
class ReportEmergencyView(generics.CreateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(reporter=self.request.user)

# List emergencies (for responders and admins)
class EmergencyListView(generics.ListAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'admin' or user.role == 'responder':
            return Emergency.objects.all()
        return Emergency.objects.filter(reporter=user)

# Update emergency status (for responders)
class UpdateEmergencyStatusView(generics.UpdateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Emergency.objects.all()

    def perform_update(self, serializer):
        user = self.request.user
        if user.role in ['admin', 'responder']:
            serializer.save()
        else:
            return Response({"error": "Permission denied"}, status=403)
