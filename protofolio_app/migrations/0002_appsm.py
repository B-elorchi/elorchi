# Generated by Django 4.0.1 on 2022-03-19 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('protofolio_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='appsM',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('teau', models.DecimalField(decimal_places=1, max_digits=3)),
            ],
        ),
    ]
