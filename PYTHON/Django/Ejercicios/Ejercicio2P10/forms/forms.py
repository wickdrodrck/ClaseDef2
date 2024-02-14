from django import forms

class FormularioEj2(forms.Form):
    nombre = forms.CharField(
        widget=forms.TextInput(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu nombre"}
        ),
        label = "Nombre",
        max_length=10,
        required=True,
    )
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu correo"}
        ),
        label = "Correo",
        max_length=40,
        required=True,
    )
    edad = forms.CharField(
        widget=forms.NumberInput(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu edad"}
        ),
        label = "Edad",
        max_length=2,
        required=True,
    )
    CHOICES = [
        ('H', 'Hombre'),
        ('M', 'Mujer')
    ]
    CHOICES2 = [
        ('Lectura', 'Lectura'),
        ('Viajar', 'Viajar'),
        ('Deporte', 'Deporte'),
        ('Cine', 'Cine'),
        ('Música', 'Música')
    ]
    genero = forms.ChoiceField(
        widget=forms.RadioSelect,
        choices=CHOICES,
        label = "Sexo",
    )
    aficiones = forms.MultipleChoiceField(
        widget=forms.CheckboxSelectMultiple,
        choices=CHOICES2,
        label = "Hobbies",
    )