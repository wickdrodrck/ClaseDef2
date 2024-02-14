import FuncionesAuxiliares as FA;

def year(año):
    return str(año)[0:3]

def month(mes):
    return str(mes)[4:6]

def monthName(mes):
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    mess = str(mes)[4:6]
    if (FA.es_mes_valido(mess)):
        return meses[mess+1]
    else:
        return "FECHA INVALIDA"
    
def day(dia):
    return str(dia)[7:9]

def date2Text(fecha):
    año = str(fecha)[0:3]
    mes = str(fecha)[4:6]
    dia = str(fecha)[7:9]
    if (FA.es_mes_valido(mes)):
        if (FA.es_dia_valido(año,mes,dia)):
            return dia + "/" + mes + "/" + año
    else:
        return "FECHA INVALIDA"
            

def date2TextName(fecha):
    año = str(fecha)[0:3]
    mes = str(fecha)[4:6]
    dia = str(fecha)[7:9]
    if (FA.es_mes_valido(mes)):
        if (FA.es_dia_valido(año,mes,dia)):
            return dia + " de " + monthName(mes) + " de " + año
    else:
        return "FECHA INVALIDA"
    
def manyDates(fechas):
    resulfechas = ""
    l = FA.extraer_fechas(str(fechas) )
        
    for x in l:
        resulfechas+=x+"\n"
    return resulfechas

def sameDates(variasfechas, fecha):
    cont = 0
    for x in FA.extraer_fechas(str(variasfechas)):
        if (x[-4:] == fecha[-4:]):
            cont+=1
    return cont
