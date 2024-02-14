import Funciones as F 

F.archivosincrear()

opcion = ""
while(opcion != "salir"):
    opcion = input("Introduce una opción: ")
    if opcion == "inc":
        F.incrementar()
    elif opcion == "dec":
        F.decrementar()
    else:
        print(F.archivoleer())