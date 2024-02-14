listo = [("Pablo",14),("Andrés",21),("Pepe",54)]

lista = list(filter(lambda x:x[1]>=18,listo))

print(lista)