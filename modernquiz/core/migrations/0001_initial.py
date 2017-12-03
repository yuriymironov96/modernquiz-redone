# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-02 17:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_type', models.CharField(choices=[('student', 'Student'), ('teacher', 'Teacher'), ('tech_staff', 'Technical Staff')], default='student', max_length=30)),
            ],
        ),
    ]
