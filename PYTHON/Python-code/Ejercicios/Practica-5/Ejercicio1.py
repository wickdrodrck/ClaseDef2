palabras = input("Introduce una cadena: ").split()
aparicion = {}
for x in palabras:
    if (x not in aparicion):
        aparicion[x] = 1
    else:
        aparicion[x] +=1
    
print(aparicion)