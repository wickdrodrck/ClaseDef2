from django.shortcuts import redirect, render
from crudbbdd.models import DatosUsuarios, Usuarios

from crudbbdd.forms import FrmLogin, AñadirAlumnos

# Create your views here.

def Login(request):
    print(
        "hola"
    )
    if(request.method == 'POST'):
        form = FrmLogin(request.POST)
        if(form.is_valid()):
            datos = form.cleaned_data
            usuario = ComprobarPerfil(datos)
            if(usuario == None):
                mensaje = "Usuario no encontrado"
            else:
                if(usuario.perfil == "administrador"):
                    return redirect('adminview', user=usuario.usuario) 
                elif(usuario.perfil == "normal"):
                    return render('normalview', user=usuario.usuario)
               
    else:
        form = FrmLogin()
        mensaje = ""
    return render(request, 'Logeo.html', {'form':form, 'mensaje':mensaje})
    
    
def ComprobarPerfil(datos):
        nombre = datos["usuario"]
        contrasenya = datos["contraseña"]
        try:
            usuario = Usuarios.objects.get(usuario=nombre, contraseña=contrasenya)
            return usuario
        except Usuarios.DoesNotExist:
            return None
        
def Vistadmin(request, user):
    if(request.method == 'POST'):
        form = AñadirAlumnos(request.POST)
        
        if(form.is_valid):
            
            return render(request, 'VistaAdmin.html', {'form':form, 'bbdd':DatosUsuarios.objects.all, 'user':user}) 
    else:
        form = AñadirAlumnos()
        mensaje = ""
    return render(request, 'VistaAdmin.html', {'form':form, 'mensaje':mensaje, 'bbdd':DatosUsuarios.objects.all, 'user':user})
    
def Vistanormal(request, user):
    return render(request, 'VistaNormal.html', {'bbdd':DatosUsuarios.objects.all, 'user':user})
