from django.http import HttpResponse
from django.shortcuts import render


def saludar(request):
    #return HttpResponse("Hola Mundooooo!!!")
    data={"nombre":"Concepción", "msg":"Hola cariño"}
    return render(request, 'index.html', data)

def despedida(request):
    data={"nombre":"Tu madre", "msg":"Hola hijo te gusta el puti?"}
    return render(request, "index.html", data)

def xd(request):
   
    return render(request, "index.html")