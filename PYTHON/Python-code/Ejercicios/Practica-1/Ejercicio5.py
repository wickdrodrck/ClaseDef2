minutos = int(input("Escribe minutos: \n"))

hora = minutos // 60
min2 = minutos - hora * 60

print (str(minutos) + " minutos son "+ str(hora) + " horas y "+ str(min2) + " minutos")