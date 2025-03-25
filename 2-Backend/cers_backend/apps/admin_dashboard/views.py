from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Emergency, Incident
from .serializers import EmergencySerializer, IncidentSerializer
from django.contrib.auth.models import User

# Admin Dashboard Overview
class AdminDashboardView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        data = {
            "total_emergencies": Emergency.objects.count(),
            "pending": Emergency.objects.filter(status="pending").count(),
            "in_progress": Emergency.objects.filter(status="in_progress").count(),
            "resolved": Emergency.objects.filter(status="resolved").count(),
        }
        return Response(data)

# List all emergencies
class EmergencyListView(generics.ListAPIView):
    queryset = Emergency.objects.all().order_by("-timestamp")
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAdminUser]

# View a single emergencies
class EmergencyDetailView(generics.RetrieveAPIView):
    queryset = Emergency.objects.all()
    serializer_class = EmergencySerializer
    permission_classes = [permissions.IsAdminUser]

# Assign responder to an emergencies
class AssignResponderView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, emergency_id):
        try:
            emergency = Emergency.objects.get(id=emergency_id)
            responder_id = request.data.get("responder_id")
            responder = User.objects.get(id=responder_id, is_staff=True)

            incident, created = Incident.objects.get_or_create(emergency=emergency)
            incident.responder = responder
            incident.save()

            return Response({"message": "Responder assigned successfully"})
        except Emergency.DoesNotExist:
            return Response({"error": "Emergency not found"}, status=404)
        except User.DoesNotExist:
            return Response({"error": "Responder not found"}, status=404)

# Update emergencies status
class UpdateEmergencyStatusView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, emergency_id):
        try:
            emergency = Emergency.objects.get(id=emergency_id)
            status = request.data.get("status")
            if status in ["pending", "in_progress", "resolved"]:
                emergency.status = status
                emergency.save()
                return Response({"message": "Emergency status updated successfully"})
            else:
                return Response({"error": "Invalid status"}, status=400)
        except Emergency.DoesNotExist:
            return Response({"error": "Emergency not found"}, status=404)
