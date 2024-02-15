from datetime import datetime
from django.db import IntegrityError
from django.shortcuts import render
from bbdd.models import UsuarioRegistrado

from bbdd.forms import FrmRegistro

# Create your views here.

def cargalogin(request):
    if(request.method == 'POST'):
        form = FrmRegistro(request.POST)
        if(form.is_valid):
            usuario = buscarAlumno(form)
            if(usuario == None):
                mensaje = "Usuario no encontrado"
            else:
                
                return render(request, 'resul.html', {'usu':usuario})  
    else:
        form = FrmRegistro()
        mensaje = ""
    return render(request, 'login.html', {'form':form, 'mensaje':mensaje})

def buscarAlumno(form):
    if form.is_valid():
        nombre = form.cleaned_data['nombre']
        contrasenya = form.cleaned_data['contraseña']
        try:
            usuario = UsuarioRegistrado.objects.get(nombre=nombre, contraseña=contrasenya)
            facceso_anterior = usuario.facceso
            usuario.facceso = datetime.now()
            usuario.save()
        except UsuarioRegistrado.DoesNotExist:
            return None
    else:
        usuario.facceso = facceso_anterior
        return usuario