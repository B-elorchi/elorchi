from distutils.command.upload import upload
from pyexpat import model
from django.db import models
import datetime as dt
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.


class myWorks(models.Model):
    images = models.ImageField(upload_to='images/%Y/%M/%d')
    head = models.CharField(max_length=150)
    des = models.TextField()
    url = models.CharField(max_length=300)

    def __str__(self):
        return self.head


class frontEnd(models.Model):
    name = models.CharField(max_length=100)
    teau = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.name


class backEnd(models.Model):
    name = models.CharField(max_length=100)
    teau = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.name


class tools(models.Model):
    name = models.CharField(max_length=100)
    teau = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.name
