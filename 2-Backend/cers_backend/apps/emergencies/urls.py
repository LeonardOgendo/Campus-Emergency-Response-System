from django.urls import path
from .views import ReportEmergencyView, EmergencyListView, UpdateEmergencyStatusView

urlpatterns = [
    path('emergency/report/', ReportEmergencyView.as_view(), name='report-emergency'),
    path('emergency/list/', EmergencyListView.as_view(), name='list-emergencies'),
    path('<int:pk>/update/', UpdateEmergencyStatusView.as_view(), name='update-emergency-status'),
]
