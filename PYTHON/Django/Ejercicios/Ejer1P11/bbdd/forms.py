from django import forms


class FrmRegistro(forms.Form):
    nombre=forms.CharField(max_length=20,widget=forms.TextInput({'class':'form-control','placeholder':"Tu nombre"}))
    contraseña=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))