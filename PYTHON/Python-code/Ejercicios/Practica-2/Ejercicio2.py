num1 = int(input("Dame un número entre el 1 y el 12: \n"))

if num1 >= 1 and num1 <= 12:
    if num1 in (1,3,5,7,10,12):
        print("Tiene 31 días.")
    elif num1 in (4,6,8,11):
        print ("Tiene 30 días.")
    else:
        print("Tiene 28 días")
else:
    print("Número del mes incorrecto")