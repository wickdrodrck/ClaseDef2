import Funciones as f 

f.CrearFichero()

eleccion = int(input("1.Consultar\n2.Eliminar\n3.Añadir Telefono\n ¿Que quieres hacer? "))

if eleccion == 1:
    nom = input("Introduce nombre: ")
    print("El telefono de "+nom+" es "+f.ConsultarTelefono(nom))
elif eleccion == 2:
    nom = input("Introduce nombre: ")
    f.EliminarTelefo(nom)
elif eleccion == 3:
    nom = input("Introduce nombre: ")
    f.AñadirTelefono(nom)