def esta_ordenada(listaa):
        if listaa == sorted(listaa):
            return True
        elif listaa == sorted(listaa, reverse=True):
            return True
        else:
            return False
        
lista = []
x = 0
while x < 5:
    x +=1
    lista.append(input("Introduce un número: "))
    
if (esta_ordenada(lista)):
    print("La lista está ordenada.")
else:
    print("No está ordenada la lista.")
