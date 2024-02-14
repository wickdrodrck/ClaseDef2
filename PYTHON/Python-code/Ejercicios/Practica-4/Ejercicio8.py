import random

nom1 = input("Introduce el primer nombre: ")
nom2 = input("Introduce el segundo nombre: ")
pjs = [[nom1,random.randint(1,10),random.randint(1,15)],[nom2,random.randint(1,10),random.randint(1,15)]]

ataque1 = pjs[0][1]
ataque2 = pjs[1][1]
defensa1 = pjs[0][2]
defensa2 = pjs[1][2]

cont = 0

decision = random.randint(1,2)
print("El combate comienza!")
while (defensa1 > 0 and defensa2 > 0):
    print("Turno: "+str(cont))
    if decision == 1:
        decision = 2
    else:
        decision = 1
        
    ataque1 = random.randint(1,10)
    ataque2 = random.randint(1,10)
    if (decision == 1):
        print("Ataca: "+nom1)
        print(nom2+" tiene "+str(defensa2)+" de vida.")
        defensa2 = defensa2 - ataque1
        print(nom2+" ha perdido: "+str(ataque1)+" de defensa.")
    else:
        print("Ataca: "+nom2)
        print(nom1+" tiene "+str(defensa1)+" de vida.")
        defensa1 = defensa1 - ataque2
        print(nom1+" ha perdido: "+str(ataque2)+" de defensa.")
    cont+=1

print(str(defensa1)+str(defensa2))
    
if (defensa1 < 0):
    print("Ha ganado el jugador: "+nom2)
elif(defensa2 < 0):
    print("Ha ganado el jugador: "+nom1)