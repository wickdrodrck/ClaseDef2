
from django.utils import timezone
from django.shortcuts import render


def calculoEdad(request, edad, anyo):
    anyonuevo = timezone.now()
    
    print(anyonuevo.year)
    print(anyo)
    if anyo > anyonuevo.year:
        edaddef = (int(anyo) - int(anyonuevo.year)) + edad
        print((int(anyonuevo.year) - int(anyo)))
        return render(request, 'index.html', {'edaddef':edaddef})
    else:
        mensajeerror = "Año es menor"
        return render(request, 'index.html', {'mensajeerror':mensajeerror})