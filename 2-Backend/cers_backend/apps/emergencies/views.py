from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import EmergencyReport
from .serializers import EmergencyReportSerializer
import json

@api_view(['POST'])
def submit_report(request):
    data = request.data.copy()

    # Extract location from JSON string
    if 'location' in data:
        try:
            location = json.loads(data['location'])
            data['latitude'] = location.get('latitude')
            data['longitude'] = location.get('longitude')
        except json.JSONDecodeError:
            return Response({"error": "Invalid location format"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = EmergencyReportSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
