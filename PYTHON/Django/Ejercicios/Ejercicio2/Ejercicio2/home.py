from django.shortcuts import render


def Bienvenido(request):
    mensaje = "Hola, mi primer ejemplo con plantillas en DJANGO"
    return render(request, "welcome.html",{"mensaje":mensaje})