from django.urls import path

from app import views

urlpatterns = [
    path('', views.login),
    path('home/', views.home),
]