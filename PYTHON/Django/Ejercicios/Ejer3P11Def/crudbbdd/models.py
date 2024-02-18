from django.db import models

class Usuarios(models.Model):
    usuario = models.CharField(max_length=30, primary_key=True)
    contraseña = models.CharField(max_length=20)
    perfil = models.CharField(max_length=10)

class DatosUsuarios(models.Model):
    id = models.AutoField(primary_key=True)
    nombrecliente = models.CharField(max_length=40)
    ciudad = models.CharField(max_length=30)
    email = models.EmailField(blank=True)
    telefono = models.CharField(max_length=7)
