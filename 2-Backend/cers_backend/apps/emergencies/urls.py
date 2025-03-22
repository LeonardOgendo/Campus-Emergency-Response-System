from django.urls import path
from .views import submit_report

urlpatterns = [
    path('api/report/', submit_report, name='submit-report'),
]
