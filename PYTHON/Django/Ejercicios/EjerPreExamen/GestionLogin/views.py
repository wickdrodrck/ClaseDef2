from django.shortcuts import redirect, render

from GestionLogin.forms import FrmLogin
from GestionLogin.models import Usuarios

# Create your views here.

def login(request):
        if(request.method == 'POST'):
            form = FrmLogin(request.POST)
            if(form.is_valid()):
                datos = form.cleaned_data
                usuario = ComprobarPerfil(datos)
                if(usuario == None):
                    mensaje = "Usuario no encontrado"
                else:
                    print('hola')
                    request.session['username'] = usuario.usuario
                    return redirect('Inicio') 
               
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