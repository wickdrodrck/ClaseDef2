def SaHMS(segun):
    horas = segun // 3600
    minutos = (segun - (3600 * horas)) // 60
    segundos = segun - ((horas*3600)+(minutos*60))
    return (horas, minutos, segundos)

def HMSaS(horas,minutos,segundos):
    segundos = horas*3600 + minutos*60+segundos
    return segundos

print(str(SaHMS(4810)) + " " + str(HMSaS(1,20,10))) 