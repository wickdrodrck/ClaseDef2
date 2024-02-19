from django import forms

class TareaForm(forms.Form):
    ESTADO_CHOICES = (
        ('pendiente', 'Pendiente'),
        ('en_progreso', 'En progreso'),
        ('completada', 'Completada'),
    )

    titulo = forms.CharField(max_length=255, label='Título')
    descripcion = forms.CharField(widget=forms.Textarea, label='Descripción')
    fecha_vencimiento = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}), label='Fecha de vencimiento')
    estado = forms.ChoiceField(choices=ESTADO_CHOICES, label='Estado')
