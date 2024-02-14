import Paquetes.ModuloEj1 as ModuloEj1;

login = []


def obtener_usuar():
    nombre = input("Introduce nom usuario: ")
    while not ModuloEj1.validarusu(nombre) or nombre != "*":
        print(ModuloEj1.validarusu(nombre))
        nombre = input("Introduce nom usuario: ")

def obtener_contra():
    contra = input("Introduce una contraseña: ")
    while not ModuloEj1.validarcontra(contra) != True:
        print(ModuloEj1.validarcontra(contra))
        contra = input("Introduce una contraseña: ")
    
nombre = obtener_usuar()
while (nombre != "*"):
    contraseña = obtener_contra()
    login.append((nombre, contraseña))
    nombre = obtener_usuar()


print(login)
