import csv

l=[
    ["a","aa",1],
    ["b","bb",2]
]

with open("EjemplosFicheros/data/otrocsv.csv","w",newline='') as f:
    fdatos=csv.writer(f,delimiter=';')
    for item in l:
        fdatos.writerow(item)
    f.close()
    
    
d=[{'nombre':'aaaa','edad':22},  {'nombre':'bbbb','edad':44} ]
claves=['nombre','edad']
with open("EjemplosFicheros/data/otrocsv.csv","w",newline='') as f:
    fdatos=csv.DictWriter(f, claves,delimiter=';')
    fdatos.writeheader()
    for item in d:
        fdatos.writerow(item)
    f.close()