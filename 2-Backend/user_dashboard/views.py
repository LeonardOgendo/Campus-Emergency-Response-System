from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from emergencies.models import Emergency
from incidents.models import Incident
from notifications.models import Notification

class UserDashboardView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure only logged-in users access this

    def get(self, request):
        user = request.user  # Get the logged-in user

        user_emergencies = Emergency.objects.filter(reported_by=user).count()
        user_incidents = Incident.objects.filter(reporter=user).count()
        unread_notifications = Notification.objects.filter(user=user, is_read=False).count()

        data = {
            "user_emergencies_reported": user_emergencies,
            "user_incidents": user_incidents,
            "unread_notifications": unread_notifications,
        }

        return Response(data)
