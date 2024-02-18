import os as o

def archivoleer():
    """
    Lee el contenido del archivo 'contador.txt' y lo devuelve como un entero.

    :return: El contenido del archivo como un entero.
    :rtype: int
    """
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r") as r:
        contenido = r.read()
        return int(contenido)
    
def creararchivo():
    """
    Intenta abrir el archivo 'contador.txt'. Si lo encuentra, devuelve True; de lo contrario, devuelve False.

    :return: True si el archivo existe, False si no.
    :rtype: bool
    """
    try:
        arch = open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r")
        return True
    except FileNotFoundError:
        return False
    
def creararchivobueno():
    """
    Verifica si el archivo 'contador.txt' existe utilizando la función path.exists() del módulo os.

    :return: True si el archivo existe, False si no.
    :rtype: bool
    """
    if (o.path.exists("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt")):
        return True
    else:
        return False
    
def archivosincrear():
    """
    Crea el archivo 'contador.txt' si no existe.

    Si el archivo ya existe, no hace nada.
    """
    if creararchivobueno() == True:
        with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "w") as w:
            w.write(str(0))
        
def incrementar():
    """
    Incrementa en uno el valor almacenado en el archivo 'contador.txt'.
    """
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r+") as r:
        contenido = r.read()
        r.seek(0)
        r.write(str(int(contenido)+1))

def decrementar():
    """
    Decrementa en uno el valor almacenado en el archivo 'contador.txt'.
    """
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio3/contador.txt", "r+") as f:
        contenido = f.read()
        f.seek(0)
        f.write(str(int(contenido)-1))

