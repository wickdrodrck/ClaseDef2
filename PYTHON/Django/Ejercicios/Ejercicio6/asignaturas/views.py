from django.shortcuts import render

from asignaturas.modelos.clases import Asignatura

# Create your views here.

def Asignaturas(request):
    asginaturees = [Asignatura("Entornos de servidor", "Rosa Rodriguez", "400"), Asignatura("Entornos de escritorio", "Yolanda", "350"), Asignatura("Interfaces", "Eva", "320")]
    return render(request, "index.html", {"asignaturas":asginaturees})