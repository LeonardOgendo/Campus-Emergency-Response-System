from rest_framework import generics
from .models import Incident
from .serializers import IncidentSerializer
from apps.emergencies.models import Emergency
from rest_framework.permissions import IsAuthenticated


class IncidentCreateView(generics.CreateAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        emergency_id = self.request.data.get('emergency')
        try:
            emergency = Emergency.objects.get(id=emergency_id)
            serializer.save(emergency=emergency)
        except Emergency.DoesNotExist:
            return Response(
                {'error': 'Emergency not found'},
                status=status.HTTP_400_BAD_REQUEST
            )


class IncidentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer
    permission_classes = [IsAuthenticated]