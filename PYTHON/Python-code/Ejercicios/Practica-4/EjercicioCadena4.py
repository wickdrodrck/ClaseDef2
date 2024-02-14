cadena = input("Introduce una palabra: ")

if cadena == cadena[::-1]:
    print("Es un palindromo.")
else:
    print("No es un palindromo.")