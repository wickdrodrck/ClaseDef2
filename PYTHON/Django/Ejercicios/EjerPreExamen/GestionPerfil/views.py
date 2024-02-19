from django.shortcuts import render

from GestionLogin.models import Usuarios

# Create your views here.

def perfil(request):
    usuario = Buscarusu(request.session.get('username'))
    return render(request, 'Perfil.html', {'usuario':usuario})

def Buscarusu(usu):
    try:
        usuario = Usuarios.objects.get(usuario=usu)
        return usuario
    except Usuarios.DoesNotExist:
        return None