from functools import reduce


facturas = {}

menu=""
facturas = {}

while(menu!="3"):
    print("1.Añadir Factura: \n 2.Pagar Factura: \n 3.Salir \n")
    menu = input("Introduce una opción: ")
    if menu == "1":
        fact1 = input("Añadir codigo de factura: ")
        fact2 = int(input("Precio de factura: "))
        facturas[fact1] = fact2
        print("Se añadió la factura: "+fact1+" con precio "+str(fact2)+" euros")
    if menu == "2":
        pagar = input("Introduce el codigo de la factura a pagar: ")
        if facturas.pop(pagar) == facturas(pagar):
            print("Se pagó la multa")
        else:
            print("No se encontró la multa.")
    if menu == "4":
        for x in facturas:
            print(x)
            

total = reduce(lambda x,y : x + y,facturas.values())

print(total)
        
                