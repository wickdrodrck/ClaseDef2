def SHMS(*args):
    if (len(args) == 1):
        horas = args[0] // 3600
        minutos = (args[0] - (3600 * horas)) // 60
        segundos = args[0] - ((horas*3600)+(minutos*60))
        return (horas, minutos, segundos)
    elif(len(args) == 3):
        segundos = args[0]*3600 + args[1]*60+args[2]
        return segundos
    else:
        return "Guau"

print(SHMS(1,20,10),SHMS(4801))