from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", include("users.urls")),
    path('api/emergencies/', include('emergencies.urls')),
    path("api/admin-dashboard/", include("admin_dashboard.urls")),
    path('api/user-dashboard/', include('user_dashboard.urls')),
    path("api/incidents/", include("incidents.urls")),
]
