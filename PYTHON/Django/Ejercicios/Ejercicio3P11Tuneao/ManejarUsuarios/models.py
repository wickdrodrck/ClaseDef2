from django.db import models

# Create your models here.

class Usuarios(models.Model):
    usuario = models.CharField(max_length=30, primary_key=True)
    contraseña = models.CharField(max_length=20)
    perfil = models.CharField(max_length=10)
    
class DatosUsuarios(models.Model):
    nombr = models.ForeignKey(Usuarios, on_delete=models.DO_NOTHING)
    ciudad = models.CharField(max_length=30)
    email = models.EmailField(blank=True)
    telefono = models.CharField(max_length=7)