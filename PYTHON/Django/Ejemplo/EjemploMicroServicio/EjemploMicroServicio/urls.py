"""EjemploMicroServicio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path,include
from ejemplo import views
from rest_framework import routers

router = routers.DefaultRouter()

# En el router vamos añadiendo los endpoints a los viewsets
router.register('peliculas', views.PeliculasViewSet)
#router.register('pelicula',views.PeliDetailView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ejemplo/', include(router.urls)),
    path('ejemplo/create/',views.PeliculaCreateView.as_view()),
    path('ejemplo/<int:pk>/',views.PeliculaDetailView.as_view()) 
    #pk es el nombre del parámetro que recive el método retrieve, se corresponde con el id
    
]





