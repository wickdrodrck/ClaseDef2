#1
from functools import reduce


potencias = lambda x, y : (x**2,y**3)
p1 = list(map(potencias,[1,3,5],[2,4,6]))

print(p1)
#2
lnombres = ["Pepe", "Juan", "Papagallo", "Manolo","Antonio"]
final = list(filter(lambda x : x.startswith("A"),lnombres))
print(final)
#3
suma_cuadrados = lambda x,y : x**2 + y**2
final = reduce(suma_cuadrados, [1,2,3,4])
print(final)
#4

#5

#6

#7