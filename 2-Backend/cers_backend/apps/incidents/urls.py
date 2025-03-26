from django.urls import path
from .views import IncidentCreateView, IncidentDetailView

urlpatterns = [
    path('', IncidentCreateView.as_view(), name='incident-create'),
    path('<int:pk>/', IncidentDetailView.as_view(), name='incident-detail'),
]