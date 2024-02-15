from django.db import models

# Create your models here.

class EquipoFutibol(models.Model):
    Identificador= models.CharField(max_length=8, primary_key=True)
    nombre=models.CharField(max_length=30)
    puntos=models.IntegerField()