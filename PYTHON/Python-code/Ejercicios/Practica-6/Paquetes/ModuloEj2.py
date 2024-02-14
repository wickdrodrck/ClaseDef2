import re

def valdni(dni):
    expr = re.compile("^\d{8}[A-Z]$")
    DIGITO_CONTROL = "TRWAGMYFPDXBNJZSQVHLCKE"
    if expr.match(dni) and dni[8] == DIGITO_CONTROL[int(dni[0:8])% 23]:
        return True
    else:
        return False
    
def valedad(edad):
    if edad > 18:
        return True
    else:
        return False