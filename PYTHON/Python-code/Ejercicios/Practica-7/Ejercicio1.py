def pares(x):
    pares = lambda x:x%2==0
    if (pares(x)):
        return True
    else:
        return False
    
print(pares(2))
print(pares(3))
print(pares(4))
print(pares(5))
