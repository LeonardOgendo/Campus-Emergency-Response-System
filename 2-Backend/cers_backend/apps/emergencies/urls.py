from django.urls import path
from .views import (
    ReportEmergencyView,
    EmergencyListView,
    LiveLocationView
)

urlpatterns = [
    path('report/', ReportEmergencyView.as_view(), name='report-emergency'),
    path('', EmergencyListView.as_view(), name='emergency-list'),
    path('location/update/', LiveLocationView.as_view(), name='update-location'),
]