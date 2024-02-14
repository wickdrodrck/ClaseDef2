import Paquetes.ModuloEj1 as ModuloEj1;
import Paquetes.ModuloEj2 as ModuloEj2;




def obtener_usuar():
    nombre = input("Introduce nom usuario: ")
    while not ModuloEj1.validarusu(nombre) or nombre != "*":
        print(ModuloEj1.validarusu(nombre))
        nombre = input("Introduce nom usuario: ")

def obtener_contra():
    contra = input("Introduce una contraseña: ")
    while not ModuloEj1.validarcontra(contra):
        print(ModuloEj1.validarcontra(contra))
        contra = input("Introduce una contraseña: ")

def obtener_edad():
    edad = input("Introduce Edad:")
    while not ModuloEj2.valedad(edad):
        print("Error menor edad")
        edad = input("Introduce Edad:")
        
def obtener_dni():
    dni = input("Introduce DNI: ")
    while not ModuloEj2.valdni(dni):
        print("Error DNI")
        dni = input("Introduce DNI: ")
        
def ejecutarScript():
    login = []
    nombre = obtener_usuar()
    while (nombre != "*"):
        contraseña = obtener_contra()
        edad = obtener_edad()
        dni = obtener_dni()
        login.append((nombre, contraseña, edad, dni))
        nombre = obtener_usuar()
    
    print(login)
    

        