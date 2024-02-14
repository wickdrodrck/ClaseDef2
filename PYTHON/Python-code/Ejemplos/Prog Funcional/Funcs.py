cuadrado = lambda x:x*2

cuadrado(2)

cuadracuadrado = lambda f = 5 : cuadrado(f)

cuadracuadrado

#Ejemplo teoría
"""
tuplitas = [("Pepa",28),('Maricarmen',40),('Tulo',35)]

tuplitas.sort(key = lambda t:t[1])

print(tuplitas)

tuplitas.sort(key = lambda t:t[0])

print(tuplitas)
"""
#Ejemplo MAP

nums = [4,6,87,4,345]
"""
lcuadrad = list(map(lambda f : f**2,nums))

print(lcuadrad)"""

#Ejemplo filter
"""
listaPares=list(filter(lambda x:x%2==0,nums))

print(listaPares)"""

#Ejemplo reduce
from functools import reduce

suma = reduce(lambda x,y:x+y,nums)
media = (reduce(lambda x,y:x+y,nums)/len(nums))

print("suma: "+str(suma)+" media: "+str(media))
