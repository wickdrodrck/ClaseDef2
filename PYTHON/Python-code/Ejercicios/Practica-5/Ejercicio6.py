cadenaentr = input("Introduce la cadena a traducir: ")
cadenasal = ""
dictionary = {
    "programación": "programming",
    "fotografía": "photography",
    "anime": "anime",
    "dibujos": "drawings",
    "ciencia": "science",
    "creativo": "creative",
    "música": "music",
    "filosofía": "philosophy",
    "existencia": "existence",
    "computadora": "computer",
    "significado": "meaning",
    "mundo": "world"
}

for x in cadenaentr.split():
    print(x)
    if x in dictionary:
        cadenasal += " " + dictionary[x]
    else:
        cadenasal +=" " +  x
        
print(cadenasal)