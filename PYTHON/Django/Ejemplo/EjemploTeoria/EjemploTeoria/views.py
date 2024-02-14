from django.shortcuts import render


def mostrarLenguajes(request):
    lenguajes = ["Python", "Java", "Javascript", "C#", "Typescript"]
    return render(request, 'index.html', {'lenguajes':lenguajes})