def filtrar_palabras(lista,num):
    lista2 = []
    for x in lista:
        if (len(x) > num):{
            lista2.append(x)
        }
    return lista2

listax = ["x","xx","y","yyx","xyxxxx","yxxx"]
n = 3

print(filtrar_palabras(listax,n))
