def CrearListacontenido():
    with open("PYTHON/Ejercicios/Practica-9/Ejercicio4/random.txt","r") as arch:
        contenido = arch.read()
        lista  = contenido.split(",")
        return lista
    

def crearFrecuencias(lista):
        dic = {}    
        for ele in lista:
            if ele not in dic:
                dic[ele] = 1
            else:
                dic[ele] += 1
        return dic

def ElmasRepetido(dic):
    max = 0
    maxpalabra = []
    for x in dic:
        if dic[x] > max:
            max = dic[x]
            
    for x in dic:
        if dic[x] == max:
            maxpalabra.append(x)
            
    return maxpalabra