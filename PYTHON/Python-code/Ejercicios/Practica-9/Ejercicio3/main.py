import Funciones as F 

F.archivosincrear()

opcion = ""
while(opcion != "salir"):
    opcion = input("Introduce una opción (inc para incrementar, dec para decrementar, salir para terminar): ")
    if opcion == "inc":
        F.incrementar()
    elif opcion == "dec":
        F.decrementar()
    elif opcion == "salir":
        print("Saliendo del programa...")
    else:
        print("Opción inválida.")
