from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Emergency
from .serializers import EmergencySerializer


class ReportEmergencyView(generics.CreateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can report

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EmergencyListView(generics.ListAPIView):
    serializer_class = EmergencySerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]  # Allow anyone to view emergencies
        return [IsAuthenticated()]  # But require auth for other methods

    def get_queryset(self):
        # For authenticated users, show their emergencies
        if self.request.user.is_authenticated:
            return Emergency.objects.filter(user=self.request.user)
        # For anonymous users, show all emergencies (or none if you prefer)
        return Emergency.objects.all()


class LiveLocationView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can update location

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