# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-18 17:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quizes', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name_plural': 'Quizes'},
        ),
    ]
