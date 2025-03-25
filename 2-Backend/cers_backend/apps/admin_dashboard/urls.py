from django.urls import path
from .views import (
    AdminDashboardView, EmergencyListView, EmergencyDetailView,
    AssignResponderView, UpdateEmergencyStatusView
)

urlpatterns = [
    path('', AdminDashboardView.as_view(), name='admin-dashboard'),
    path('emergencies/', EmergencyListView.as_view(), name='emergencies-list'),
    path('emergencies/<int:pk>/', EmergencyDetailView.as_view(), name='emergencies-detail'),
    path('emergencies/<int:emergency_id>/assign/', AssignResponderView.as_view(), name='assign-responder'),
    path('emergencies/<int:emergency_id>/status/', UpdateEmergencyStatusView.as_view(), name='update-status'),
]
