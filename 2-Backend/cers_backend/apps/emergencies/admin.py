from django.contrib import admin
from .models import Emergency

@admin.register(Emergency)
class EmergencyAdmin(admin.ModelAdmin):
    list_display = ('id', 'reporter', 'emergency_type', 'severity', 'status', 'created_at')
    list_filter = ('status', 'emergency_type', 'severity')
    search_fields = ('description', 'location', 'reporter__username')
    readonly_fields = ('created_at', 'updated_at')
    list_editable = ('status',)