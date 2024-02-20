"""EjerPreExamen URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from GestionLogin.views import login
from Inicio.views import inicio
from GestionTareas.views import *
from GestionPerfil.views import perfil

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', login),
    path('', login, name='cerrar_sesion'),
    path('Inicio/', inicio, name='Inicio'),
    path('Tareas/', tarea, name='tarea'),
    path('Perfil/', perfil, name='perfil'),
    path('modificar-tarea/<int:id>/', modificar_tarea, name='modify_task'),
    path('eliminar-tarea/<int:id>/', eliminar_tarea, name='delete_task'),
    
]
