letra = input("Introduce un carácter: \n")
if len(letra) == 1:
    if letra.isdigit():
        print("Es un digito.")
    elif letra.isupper():
        print("Es una mayúscula.")
    elif letra.islower():
        print("Es una minúscula.")
    else:
        print("Otro tipo de cáracter.")
else:
    print("No es un cáracter.")