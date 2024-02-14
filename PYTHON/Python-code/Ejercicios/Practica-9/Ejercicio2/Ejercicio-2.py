import Funciones as F

diccionariopersonas = F.LeerFichero()

for persona in diccionariopersonas:
    print("Persona "+persona+"-> Nombre: "+diccionariopersonas[persona][0]+", Apellido: "+diccionariopersonas[persona][1]+", Fecha nac: "+diccionariopersonas[persona][2])