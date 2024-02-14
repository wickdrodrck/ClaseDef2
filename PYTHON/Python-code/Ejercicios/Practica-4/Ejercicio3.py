lista = []
x = 0
cont = 0
while x < 5:
    x +=1
    lista.append(input("Introduce una cadena: "))
    
cadena1 = input("Introduce la primera cadena: ")
for x in lista:
    if (x == cadena1):
        cont += 1
if (cont > 0):
    print(lista)
    print("La cadena está en la lista.")
    print("Aparece "+str(cont)+" veces.")
    cadena2 = input("Introduce una segunda cadena:")
    lista.insert(lista.index(cadena1), cadena2)
    
    lista.remove(cadena1)
    print(lista)
else:
    print("La cadena no está en la lista.")
     