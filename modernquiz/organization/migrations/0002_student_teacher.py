# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-06 21:06
from __future__ import unicode_literals

from django.db import migrations
import organization.managers


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
        ('organization', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
            },
            bases=('auth.user',),
            managers=[
                ('objects', organization.managers.StudentManager()),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
            },
            bases=('auth.user',),
            managers=[
                ('objects', organization.managers.TeacherManager()),
            ],
        ),
    ]
