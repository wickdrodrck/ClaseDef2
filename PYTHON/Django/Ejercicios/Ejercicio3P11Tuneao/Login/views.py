from django.shortcuts import redirect, render
from ManejarUsuarios.models import Usuarios

from Login.forms import FrmLogin

# Create your views here.

def Login(request):
    if(request.method == 'POST'):
        form = FrmLogin(request.POST)
        if(form.is_valid()):
            datos = form.cleaned_data
            usuario = ComprobarPerfil(datos)
            
            if(usuario == None):
                mensaje = "Usuario no encontrado"
                
            else:
                request.session['username'] = usuario.usuario
                if(usuario.perfil == "administrador"):
                    return redirect('adminview', user=usuario.usuario) 
                elif(usuario.perfil == "normal"):
                    return redirect('normalview', user=usuario.usuario)
               
    else:
        form = FrmLogin()
        mensaje = ""
    return render(request, 'Login.html', {'form':form, 'mensaje':mensaje})

    
def ComprobarPerfil(datos):
    usu = datos['usuario']
    contra = datos['contraseña']
    try:
        usuario = Usuarios.objects.get(usuario=usu, contraseña=contra)
        return usuario
    except Usuarios.DoesNotExist:
        return None
        
def cerrar_sesion(request):
    request.session.flush()
    return redirect("cerrar_sesion")