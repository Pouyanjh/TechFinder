from django.contrib import admin
from django.urls import path, include
from userlog import views

urlpatterns = [
    path('signup', views.SignupView, name='signup'),
    path('', views.HomeView, name='home'),
    path('login', views.LoginView, name='login'),
]