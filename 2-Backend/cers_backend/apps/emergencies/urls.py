from django.urls import path
from .views import EmergencyCreateView, UserEmergencyListView

urlpatterns = [
    path('report/', EmergencyCreateView.as_view(), name='emergency-create'),
    path('my-reports/', UserEmergencyListView.as_view(), name='user-emergencies'),
]