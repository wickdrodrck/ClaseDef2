listo = [("Pablo",34),("Andrés",21),("Pepe",54)]
listo = list(map(lambda x:(x[0],x[1]+1),listo))


print(listo)