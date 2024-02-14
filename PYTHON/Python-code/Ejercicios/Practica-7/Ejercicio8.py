saludos = ["hola", "hello", "hi"]
nombres = ['ana', 'antonio', 'bea']

saludiNomb = [(x.title(),y.title()) for x in saludos for y in nombres]

print(saludiNomb)