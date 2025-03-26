from rest_framework import generics, status
from rest_framework.response import Response
from .models import Emergency  # Only import Emergency from current app
from apps.incidents.models import Incident  # Import Incident from incidents app
from .serializers import EmergencySerializer
from rest_framework.permissions import IsAuthenticated


class ReportEmergencyView(generics.CreateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EmergencyListView(generics.ListAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Emergency.objects.filter(user=self.request.user)


class LiveLocationView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        latitude = request.data.get('latitude')
        longitude = request.data.get('longitude')

        if not latitude or not longitude:
            return Response(
                {'error': 'Both latitude and longitude are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response({
            'status': 'Location received',
            'coordinates': {
                'latitude': latitude,
                'longitude': longitude
            }
        })