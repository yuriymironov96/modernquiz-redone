# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-11-21 21:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0005_auto_20171210_1427'),
        ('quizes', '0006_auto_20181120_2222'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_correct', models.BooleanField(default=False)),
                ('answer_text', models.TextField()),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answers', to='quizes.Question')),
                ('studentQuizResult', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answers', to='organization.StudentQuizResult')),
            ],
        ),
    ]
