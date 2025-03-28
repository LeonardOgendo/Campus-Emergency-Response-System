# Generated by Django 5.1.6 on 2025-03-13 15:23

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('admin_dashboard', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='emergency',
            name='reported_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reported_emergencies', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='incident',
            name='emergency',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='incidents', to='admin_dashboard.emergency'),
        ),
        migrations.AddField(
            model_name='incident',
            name='responder',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='incidents_handled', to=settings.AUTH_USER_MODEL),
        ),
    ]
