from django.shortcuts import render
from Ejercicio4.models.Lenguaje import Lenguaje


def LenguajeFav(request):
    lengu = Lenguaje("Java", 1995, "Es un lenguaje muy popular")
    return render(request, "index.html", {"lengu":lengu})