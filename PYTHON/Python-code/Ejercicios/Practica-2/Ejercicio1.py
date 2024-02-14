cantidad = int(input("Introduce una cantidad de dinero: \n"))
comision = 10
for i in range(cantidad):
    if i % 1001 == 0:
        comision= comision + 10
print("La comision es de "+str(comision)+" euros.")
    