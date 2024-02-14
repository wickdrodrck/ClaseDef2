from django.shortcuts import render

from forms.forms import FormularioEj2

def formprincip(request):
    if request.method == "POST":
        form = FormularioEj2(request.POST)
        if form.is_valid():
            return render(request, "resul.html", {"form": form.cleaned_data})
    else:
        form = FormularioEj2()

    return render(request, "formulario.html", {"form": form})

# Create your views here.
