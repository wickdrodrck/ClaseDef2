nom = ""
listgustos= {}

while(nom != "*"):
    nom = input("Introduce nombre: ")
    if nom == "*":
        break
    gusto = input("Introduce un gusto: ")
    if (nom in listgustos):
        if gusto not in listgustos[nom]:
            listgustos[nom] = [gusto]
        else:
            listgustos[nom].append(gusto)
    else:
        listgustos[nom] = [gusto]

for x in listgustos:
    print("Nombre: "+ x+"\n Gustos:")
    for f in listgustos[x]:
        print(f)