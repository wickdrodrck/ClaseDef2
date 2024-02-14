cadena1 = input("Introduce: ")
cadena2 = ""
cadena3 = ""
cadena4 = ""

separa = cadena1.split()

for x in separa:
    if len(x ) > 0:
        caracter = x[0]
        cadena2 = cadena2 + caracter.upper()
for y in separa:
    if(len(y)>0):
        cadena3 = cadena3 + y.title()+" "
for z in separa:
    if len(z) > 0:
        if z[0] == "a" or z[0] == "A":
            cadena4 = cadena4 + z + " "

print(cadena2+" - "+cadena3+" - "+cadena4)