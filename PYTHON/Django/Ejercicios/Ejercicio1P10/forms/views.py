from django.shortcuts import render

from forms.modelos.forms import MegaFormulario

# Create your views here.

def formularioprin(request):
    if request.method == "POST":
        formi = MegaFormulario(request.POST)
        if formi.is_valid():
            return render(request, "resul.html", formi.cleaned_data)
    else:
        formi = MegaFormulario()
        
        
    return render(request, "formulario.html", {"formi": formi})