from django.shortcuts import redirect, render

from ManejarUsuarios.models import DatosUsuarios, Usuarios
from ManejarUsuarios.forms import AñadirUsuarios

# Create your views here.
def Vistadmin(request, user):
    usuarioS = Usuarios.objects.get(usuario=request.session.get('username'))
    if (usuarioS.perfil != "administrador"):
        return redirect('inicio')
    if(request.method == 'POST'):
        form = AñadirUsuarios(request.POST)

        if(form.is_valid()):
            datoscliente = form.cleaned_data
            nuevo_usuario = Usuarios(
                usuario = datoscliente["usuario"],
                contraseña = datoscliente["contraseña"]
            )
            nuevo_usuario2 = DatosUsuarios(
                nombrecliente=datoscliente['nombrecliente'],
                ciudad=datoscliente['ciudad'],
                email=datoscliente['email'],
                telefono=datoscliente['telefono']
            )
            nuevo_usuario2.save()
            nuevo_usuario.save()
            return render(request, 'Admin.html', {'form':form, 'bbdd':DatosUsuarios.objects.all, 'user':user}) 
    else:
        form = AñadirUsuarios()
        mensaje = ""
    return render(request, 'Admin.html', {'form':form, 'mensaje':mensaje, 'bbdd':DatosUsuarios.objects.all, 'user':user})
    
def Vistanormal(request, user):
    usuarioS = Usuarios.objects.get(usuario=request.session.get('username'))
    if (usuarioS.perfil == "administrador"):
        return redirect('inicio')
    return render(request, 'Normal.html', {'bbdd':DatosUsuarios.objects.all, 'user':user})