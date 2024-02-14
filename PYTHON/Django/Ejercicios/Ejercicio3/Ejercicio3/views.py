
from datetime import date

from django.shortcuts import render


def Fechitas(request):
    Fecha = date.today()
    return render(request, "index.html", {"Fecha":Fecha})