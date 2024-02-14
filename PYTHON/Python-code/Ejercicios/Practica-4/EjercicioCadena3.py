def es_sub(cadena1, cadena2):
    return cadena2 in cadena1

def cadena_alf(cadena1, cadena2):
    return min(cadena1, cadena2)


cadenaa1 = "EspatoCocsis"
cadenaa2 = "Cocsis"

resul1 = es_sub(cadenaa1, cadenaa2)
resul2 = cadena_alf(cadenaa1, cadenaa2)

print("Subcadena resul: " + str(resul1) + ", Orden alfabe: "+resul2)