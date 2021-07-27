# Generated by Django 3.2.5 on 2021-07-19 17:00

from django.conf import settings
import django.contrib.postgres.functions
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='HashTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('caption', models.CharField(max_length=100)),
                ('id', models.UUIDField(default=django.contrib.postgres.functions.RandomUUID, editable=False, primary_key=True, serialize=False)),
                ('contributor', models.ForeignKey(default='0', on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Themes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(default=None, max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Shape',
            fields=[
                ('shape', models.ImageField(blank=True, null=True, upload_to='')),
                ('id', models.UUIDField(default=django.contrib.postgres.functions.RandomUUID, editable=False, primary_key=True, serialize=False)),
                ('contributor', models.ForeignKey(default='0', on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True, null=True)),
                ('upload_data', models.ImageField(upload_to='upload_to')),
                ('hashtags', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='upload.hashtags')),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.image')),
                ('shape', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.shape')),
                ('theme', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='upload.themes')),
            ],
        ),
        migrations.AddField(
            model_name='hashtags',
            name='hashtag',
            field=models.ManyToManyField(default=None, through='upload.Post', to='upload.Image'),
        ),
    ]