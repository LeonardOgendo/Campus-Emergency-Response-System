from rest_framework import generics, status
from rest_framework.response import Response
from .models import Emergency
from .serializers import EmergencySerializer

class ReportEmergencyView(generics.CreateAPIView):
    serializer_class = EmergencySerializer
    permission_classes = []  # No authentication required

    def perform_create(self, serializer):
        # Only set user if authenticated, otherwise leaves it as None
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            serializer.save()

class EmergencyListView(generics.ListAPIView):
    serializer_class = EmergencySerializer
    permission_classes = []  # Changed to allow public viewing (adjust as needed)

    def get_queryset(self):
        # Return all emergencies or filter by user if authenticated
        if self.request.user.is_authenticated:
            return Emergency.objects.filter(user=self.request.user)
        return Emergency.objects.all()

class LiveLocationView(generics.GenericAPIView):
    permission_classes = []  # Changed to allow public access (adjust as needed)

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