from django.db import models

class Usuarios(models.Model):
    usuario = models.CharField(max_length=30, primary_key=True)
    contraseña = models.CharField(max_length=20)
    perfil = models.CharField(max_length=10)

class DatosUsuarios(models.Model):
    usuario = models.ForeignKey(Usuarios, primary_key=True,on_delete=models.CASCADE)
    ciudad = models.CharField(max_length=30)
    email = models.EmailField(blank=True)
    telefono = models.CharField(max_length=7)
