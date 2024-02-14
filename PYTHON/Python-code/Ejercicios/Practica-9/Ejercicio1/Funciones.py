
def CrearFichero():
    array1 = {"El Papa,12345678\n","Pipo,545454631\n","Papo,53534532\n"}
    f = open("PYTHON/Ejercicios/Practica-9/Ejercicio1/listin.txt", "w")
    f.writelines(array1)
    f.close()

def ConsultarTelefono(nombre):
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio1/listin.txt", "r") as f:
        lineas = f.readlines()
        for i in lineas:
            linea = i.split(",")
            
            if nombre == linea[0]:
                return linea[1]
            
def AñadirTelefono(nombre):
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio1/listin.txt", "r+") as f:
        lineas = f.readlines()
        print(lineas)
        for x, i in enumerate(lineas):
            linea = i.split(",")
            if linea[0] == nombre:
                lineas[x] = lineas[x].split(",")[0] + "," +  input("Introduce el telefono: ") + "\n"
        f.writelines(lineas)

def EliminarTelefo(nombre):
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio1/listin.txt", "r+") as f:
        lineas = f.readlines()
        for x, i in enumerate(lineas):
            linea = i.split(",")
            if nombre == linea[0]:
                
                lineas[x] = linea[0] + ","
        f.seek(0)
        f.writelines(lineas)