import re

def validarusu(usu):
    expr = re.compile('^\w{6,12}$')
    Expr = re.compile('^\W{6,12}$')
    if expr.match(usu):
        return True
    elif len(usu) < 6:
        return "El nombre de usuario debe contener al menos 6 caracteres"
    elif len(usu) > 12:
        return "El nombre de usuario debe contener menos de 12 caracteres"
    elif Expr.match(usu):
        return "El nombre de usuario puede contener solo letras y números"

def validarcontra(contra):
    expr = re.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])\S{8,}$")
    if expr.match(contra):
        return True
    else:
        return "La contraseña elegida no es segura"
    