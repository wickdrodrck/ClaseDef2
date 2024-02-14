d={"uno":2,"dos":4,"tres":5}
d1={'nombre':"Rosa",'clase':'DAW','asignaturas':2}
print(d1['clase'])
d1['asignaturas']+=1
del(d["dos"])
print(d)
d1['nombre']="Pepe"
d1['antiguedad']=23
print(d1)

x="dos"
if x in d:
    print("si")
    
for i in d1:
    print(i)
    
for e in d:
    print(d[e])
    
for x in d1.values():
    print(x)
    
for y in d1.items():
    print(y)
    
d2 = {'Nombre':'Michael','equipo':'Chicago Bulls','anillos':{'temporadas':[10,20,30,40,50]}}

print(d2['anillos']['temporadas'][2])