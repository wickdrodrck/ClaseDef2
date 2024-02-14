import os as o

def archivoleer():
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r") as r:
        contenido = r.read()
        return int(contenido)
    
def creararchivo():
    try:
        arch = open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r")
        return True
    except FileNotFoundError:
        return False
    
def creararchivobueno():
    if (o.path.exists("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt")):
        return True
    else:
        return False
    
def archivosincrear():
    if creararchivobueno() == True:
        with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "w") as w:
            w.write(str(0))
        
def incrementar():
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r+") as r:
        contenido = r.read()
        r.seek(0)
        r.write(str(int(contenido)+1))
        r.close()
def decrementar():
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r+") as f:
        contenido = f.read()
        f.seek(0)
        f.write(str(int(contenido)-1))
        f.close()