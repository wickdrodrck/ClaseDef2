
def LeerFichero():
    array1 = {}
    array2 = []
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio2/personas.txt", "r") as r:
        lineas = r.readlines()
        for x in lineas:
            array2 = []
            lineasep = x.split(";")
            for y in lineasep:
                if y != lineasep[0]:
                    array2.append(y)   
            array1.update({lineasep[0]: array2})
    return array1