# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-11-18 19:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizes', '0004_quiz_is_public'),
    ]

    operations = [
        migrations.AddField(
            model_name='choice',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='question',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
