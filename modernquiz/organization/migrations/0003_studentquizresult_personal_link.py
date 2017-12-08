# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-08 22:13
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0002_student_teacher'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentquizresult',
            name='personal_link',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]