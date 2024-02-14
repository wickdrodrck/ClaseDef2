
x= ""
usuarios = {}

def añadirusu():
        nom = input("Introduce un Nombre: ")
        apel = input("Introduce el apellido: ")
        con = input("Introduce contraseña: ")
        
        nusu = nom[0] + apel
        
        usuarios[nusu] = {
                "nombre":nom,
                "apellido":apel,
                "password":con
            }
            
        print(usuarios)


for l in range(3):
    añadirusu(usuarios)

while x != "4":
    print("1.Añadir usuario. \n 2.Eliminar usuario. \n 3.Cambiar password \n 4.Salir")
    x = input("Introduce una opcion: ")
    if x == "1":
        añadirusu(usuarios)
    if x == "2":
        n = input("Introduce el nombre de usuario a eliminar: ")
        if n in usuarios:
            usuarios.pop(n)
            print("Usuario eliminado")
        else:
            print("El usuario no existe.")
    if x == "3":
        n = input("Introduce el nombre de usuario a eliminar: ")
        if n in usuarios:
            usuarios[n]["password"] = input("Introduce la nueva contraseña: ")
            print("Contraseña cambiada")