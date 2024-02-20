from django import forms


class FrmLogin(forms.Form):
    usuario=forms.CharField(max_length=30,widget=forms.TextInput({'class':'form-control','placeholder':"Tu nombre"}))
    contraseña=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))