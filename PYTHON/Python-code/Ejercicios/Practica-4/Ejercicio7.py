listnomb = []
nn = 0
while(nn != "-1"):
    nn = input("Introduce un nombre: ")
    if nn != "-1":
        listnomb.append(nn)
fr = {}

for i in listnomb:
    if i in fr:
        fr[i] +=1
    else:
        fr[i] = 1

for nombre, frecuencia in fr.items():
    print(nombre+" se ha repetido "+str(frecuencia)+" veces")
