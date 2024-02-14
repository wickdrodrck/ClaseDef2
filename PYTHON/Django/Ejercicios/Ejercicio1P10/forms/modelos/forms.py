from django import forms 

class MegaFormulario(forms.Form):
    nombre = forms.CharField(
        widget=forms.TextInput(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu nombre"}
        ),
        label = "Nombre",
        max_length=10,
        required=True,
    )
    aficiones = forms.MultipleChoiceField(
        choices=[
            ('Lectura','Lectura'),
            ('Viajar', 'Viajar'),
            ('Deportes', 'Deportes'),
            ('Cine', 'Cine'),
            ('Musica', 'Musica'),
        ],
        widget=forms.CheckboxSelectMultiple,
        label="Aficiones",
        required=False
    )