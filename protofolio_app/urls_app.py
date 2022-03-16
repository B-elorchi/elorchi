from django.urls import path
from . import views

urlpatterns = [
    path('', views.app, name='home'),
    path('contact/', views.contact, name='contact'),
    path('cont/', views.cont, name='cont'),
]
