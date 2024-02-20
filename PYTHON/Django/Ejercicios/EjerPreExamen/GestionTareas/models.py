from django.db import models

# Create your models here.

from django.db import models

from GestionLogin.models import Usuarios

class Tarea(models.Model):
    ESTADO_CHOICES = (
        ('pendiente', 'Pendiente'),
        ('en_progreso', 'En progreso'),
        ('completada', 'Completada'),
    )

    usuario = models.ForeignKey(Usuarios, on_delete=models.DO_NOTHING)
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    fecha_vencimiento = models.DateField()
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='pendiente')