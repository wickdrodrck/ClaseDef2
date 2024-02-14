agenda = {}
cont = 0
while cont != 5:
    cont = int(input("Introduce una opcion: "))
    if cont == 1:
        nom = input("Introduce un nombre: ")
        if nom in agenda:
            print("Telefono: "+agenda[nom])
            opci2 = input("¿Quieres modificar?: ")
            if (opci2 == "si"):
                agenda[nom] = input("Introduce nuevo telefono: ")
        else:
            agenda[nom] = input("Introduce telefono para contacto: ")            
    elif cont == 2:
        cad1 = input("Introduce una cadena para buscar: ")
        for x in agenda:
            if x in agenda:
                print(x)
    elif cont == 3:
        borr = input("Introduce nombre para borrar: ")
        if borr in agenda:
            borr2 = input("Quieres borrar el número?")
            if borr2 == "Si" or borr2 =="si":
                agenda.remove(nom)
    elif cont == 4:
        for f in agenda:
            print("Nombre: "+f+" - Telefono: "+agenda[f])