from django.shortcuts import render
lenguajes = ["Python", "Java", "Javascript", "C#", "Typescript"]

def Lenguajes(request):
    mensaje = ""
    if request.method == 'POST':
        nombre = request.POST['nombre_input']
        arraylengunuevos = nombre.split(",")
        array_similares = list(filter(lambda x: x in nombre, arraylengunuevos))
        array_diferentes = list(filter(lambda x: x not in nombre, arraylengunuevos))
        print(len(array_similares))
        if len(array_similares) == 1:
            mensaje = "Estás empezando..."
            for x in array_diferentes:
                lenguajes.append(x)
            
        elif len(array_similares)-1 == 0:
            mensaje = "Espabila y ponte a estudiar ya"
            for x in array_diferentes:
                lenguajes.append(x)
                
        else:
            mensaje = array_similares
            lenguajes.append(x)
        
    return render(request, 'index.html', {"lenguajes":lenguajes, "mensaje":mensaje})
<<<<<<< HEAD


=======
    
>>>>>>> 55f12c24cfe75e651b3b92637971d745fcc6defc
