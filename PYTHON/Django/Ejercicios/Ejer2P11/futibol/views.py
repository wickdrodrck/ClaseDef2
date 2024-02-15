from django.shortcuts import redirect, render
from futibol.forms import FrmPartido

from futibol.models import EquipoFutibol

# Create your views here.

def cargaEquipos(request):
    equipos = EquipoFutibol.objects.all()
    return render(request, 'LigaFutbol.html', {'equipos':equipos})

def detalle_equipo(request, Identificador):
    equipo = EquipoFutibol.objects.get(Identificador = Identificador)
    return render(request, 'Equipo.html', {'equipo': equipo})

def editarpartido(request):
    if(request.method == 'POST'):
        form = FrmPartido(request.POST)
        if(form.is_valid()):
            datos = form.cleaned_data
            print(datos)
            if(buscar_equipos(datos['equipolocal'], datos['equipovisitante'])):
                actualizar_puntos(datos)
                return redirect(cargaEquipos)
            else:
                mensaje = "Equipo/s no válidos"
                  
    else:
        form = FrmPartido()
        mensaje = ""
    return render(request, 'Partidos.html', {'form':form, 'mensaje':mensaje})

def buscar_equipos(equipo1, equipo2):
    try:
            equipouno = EquipoFutibol.objects.get(Identificador=equipo1)
            equipodos = EquipoFutibol.objects.get(Identificador=equipo2)
            return True
    except EquipoFutibol.DoesNotExist:
            return False
    
def actualizar_puntos(datos):
    equipol = EquipoFutibol.objects.get(Identificador = datos['equipolocal'])
    equipov = EquipoFutibol.objects.get(Identificador = datos['equipovisitante'])
    if  (datos['goleslocal'] > datos['golesvisitante']):
        equipol.puntos += 2
        equipol.save()
    elif(datos['goleslocal'] < datos['golesvisitante']):
        equipov.puntos += 2
        equipov.save()
    else:
        equipol.puntos += 1
        equipov.puntos += 1
        equipov.save()
        equipol.save()