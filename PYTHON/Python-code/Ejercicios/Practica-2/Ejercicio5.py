import random
intentos=0

num1 = random.randint(0,10)
num2=0


while(num2 != num1):
    intentos=intentos+1
    if intentos <= 5:
        num2 = int(input("Introduce un número: "))
        if (num1 > num2):
            print("El número es mayor.")
        if(num1 < num2):
            print("El número es menor.")
    else:
        break
    
if (num2==num1):
    print("Lo adivinaste con "+str(intentos)+" intentos.")
else:
    print("Has fallado con 5 intentos.")