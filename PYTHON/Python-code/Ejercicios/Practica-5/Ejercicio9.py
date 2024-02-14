tuplita = [("Los cracks","Paco"),("Los cracks","El manolo"),("El panoli","tú")]
dicc = {}

for x in tuplita:
    if x[0] in dicc:
        dicc[x[0]].append(x[1])
    else:
        dicc[x[0]] = [x[1]] #array necesario aqui en vez de string

print(dicc)