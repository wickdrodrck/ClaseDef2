#1
from functools import reduce


exponenciacion_alt = lambda x, y:x**y if y % 2 == 0 else y**x
listt = list(map(exponenciacion_alt, [4,3,2,1], range(4)))
print(listt)
#2
ultimavocal = lambda x : x[-1].lower() in ["a","e","i","o","u"]
otro = list(filter(ultimavocal,["Pitos","Pitas","Pites", "Papa", "Pepo"]))
print(otro)
#3
multipli_acu = lambda x,y : x * y
nuevaaa = reduce(multipli_acu, list(range(1,5,1)))
print(nuevaaa)
#4
lpalabrs = ["hola","halo","helo","hula"]
lpalabrs2 = list(map(lambda x : x + " - ", lpalabrs))
print(lpalabrs2)
#5

tuplon = [("nombre", 5), ("nombre2", 6), ("nombre3", 11), ("nombre4", 9), ("nombre5", 19)]
maka = list(filter(lambda x: x[1] % 3 == 0, tuplon))
print(maka)

#6
lpalabrs = ["hola","asahalo","heloaa","hulas"]
nlista = [x for x in lpalabrs if len(x) % 2 == 0 ]

print(nlista)
#7
nllista = [x **3 for x in range(1,15,1)]
print(nllista)
#8
lista1 = [3,4,5,6]
lista2 = [1,2]

lista3 = [x + y  for x in lista1 for y in lista2]

print(lista3)
#9