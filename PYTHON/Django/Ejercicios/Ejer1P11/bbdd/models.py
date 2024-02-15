from django.db import models

# Create your models here.

class UsuarioRegistrado(models.Model):
    nombre=models.CharField(max_length=30)
    contraseña = models.CharField(max_length=20)
    email = models.EmailField()
    telefono = models.CharField(max_length=7)
    fregistro = models.DateField()
    facceso = models.DateField()