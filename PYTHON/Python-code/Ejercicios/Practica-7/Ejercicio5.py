Alumnonotas = [{"nombre":"Rodrigo","nota":5},{"nombre":"Pepito","nota":1},{"nombre":"Cabroncito","nota":4},{"nombre":"Sesertov","nota":9}]

listAprob = list(filter(lambda x : x["nota"] >= 5, Alumnonotas))

listsuspend = list(filter(lambda x : x["nota"] < 5, Alumnonotas))

custom = int(input("Introduce nota: "))
listcustom = list(filter(lambda x : x["nota"] > custom, Alumnonotas))

print("Lista aprob: "+str(listAprob))
print("Lista aprob: "+str(listsuspend))
print("Lista aprob: "+str(listcustom))