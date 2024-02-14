import random

num1 = random.randint(0,10000)
num2=0

while(num2 != num1):
    num2 = int(input("Introduce un número: "))
    if (num1 > num2):
        print("El número es mayor.")
    if(num1 < num2):
        print("El número es menor.")

print("Lo adivinaste!")