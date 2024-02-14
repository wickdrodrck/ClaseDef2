import csv

def HacerCuentas():
    with open("/home/administrador/Documentos/Repos/ClaseDef/PYTHON/Ejercicios/Practica-9/Ejercicio5/alumnos.csv", "r", encoding="UTF-8") as archi:
        contenido = list(csv.DictReader(archi, delimiter=";"))
    with open("/home/administrador/Documentos/Repos/ClaseDef/PYTHON/Ejercicios/Practica-9/Ejercicio5/cuentas.csv", "r", encoding="UTF-8") as archi2:
        contenido2 = csv.DictReader(archi2)
        cuentas_existentes = [fila["Correo"] for fila in contenido2]
    
    nuevas_cuentas = []
    for alumno in contenido:
        correo = alumno["Nombre"] + "." + alumno["PrimerApellido"]
        if "SegundoApellido" in alumno and alumno["SegundoApellido"]:
            correo += "." + alumno["SegundoApellido"]
        correo += "@estudiantes.plaza.com"
        
        # Verificar si la cuenta ya existe
        if not any(fila["Correo"] == correo for fila in contenido2):
            nuevas_cuentas.append({"Correo": correo})
    
    # Escribir nuevas cuentas en el archivo
    with open("/home/administrador/Documentos/Repos/ClaseDef/PYTHON/Ejercicios/Practica-9/Ejercicio5/cuentas.csv", "a", encoding="UTF-8", newline="") as archi2:
        escritor = csv.DictWriter(archi2, fieldnames=["Correo"], delimiter=";")
        escritor.writerows(nuevas_cuentas)
