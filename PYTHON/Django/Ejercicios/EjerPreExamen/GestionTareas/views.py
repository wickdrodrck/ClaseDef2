from django.shortcuts import get_object_or_404, redirect, render

from GestionTareas.models import Tarea
from GestionTareas.forms import TareaForm
from GestionLogin.models import Usuarios

# Create your views here.


def tarea(request):
    username = request.session.get('username')
    usuario = get_object_or_404(Usuarios, usuario=username)
    array = []
    array.extend(Tarea.objects.filter(usuario=usuario))
    if(request.method == 'POST'):
        form = TareaForm(request.POST)

        if(form.is_valid()):
            datos_tarea = form.cleaned_data
            
            
            nueva_tarea = Tarea(
                usuario=usuario, # Asigna aquí el usuario específico
                titulo=datos_tarea['titulo'],
                descripcion=datos_tarea['descripcion'],
                fecha_vencimiento=datos_tarea['fecha_vencimiento'],
                estado=datos_tarea['estado']
            )
            nueva_tarea.save()
            array.append(nueva_tarea)
            return render(request, 'Tareas.html', {'form':form, 'bbdd':array, 'username': username})
    else:
        form = TareaForm()
        mensaje = ""
    return render(request, 'Tareas.html', {'form':form, 'mensaje':mensaje, 'bbdd':array, 'username': username})
    
def eliminar_tarea(request, id):
    print(id)
    tarea = Tarea.objects.get(id=id)
    # Lógica para eliminar la tarea...
    tarea.delete()
    return redirect('tarea')


def modificar_tarea(request, id):
    print("hola")