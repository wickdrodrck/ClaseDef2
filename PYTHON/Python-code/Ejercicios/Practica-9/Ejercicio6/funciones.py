import csv, math

def SacarDatos():
    fichero = open("/home/administrador/Documentos/Repos/ClaseDef/PYTHON/Ejercicios/Practica-9/Ejercicio6/cotizacion.csv", "r", encoding="UTF-8", errors="replace")
    contenido = csv.DictReader(fichero, delimiter=";")
    
    dictArchivo = {}

    for row in contenido:
        dictArchivo[row["Nombre"]] = {
            "Final": float(row["Final"].replace(".", "").replace(",", ".")),
            "Maximo": float(row["Maximo"].replace(".", "").replace(",", ".")),
            "Minimo": float(row["Minimo"].replace(".", "").replace(",", ".")),
            "Volumen": float(row["Volumen"].replace(".", "").replace(",", ".")),
            "Efectivo": float(row["Efectivo"].replace(".", "").replace(",", ".")),
        }

    fichero.close()
    return dictArchivo

def NueCSV(dict):
    with open("/home/administrador/Documentos/Repos/ClaseDef/PYTHON/Ejercicios/Practica-9/Ejercicio6/cotizacionsalida.csv", "w", newline='') as file:
        contenido = csv.writer(file, delimiter=';')
        contenido.writerow(["Nombre", "Maximo", "Minimo", "Media"])

        for row in dict:
            media = math.floor((dict[row]["Final"] + dict[row]["Minimo"] + dict[row]["Maximo"]) / 3)
            contenido.writerow([row, str(dict[row]["Maximo"]), str(dict[row]["Minimo"]), str(media)])