from django import forms


class FrmLogin(forms.Form):
    usuario=forms.CharField(max_length=30,widget=forms.TextInput({'class':'form-control','placeholder':"Tu nombre"}))
    contraseña=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    
class AñadirAlumnos(forms.Form):
    nombrecliente=forms.CharField(max_length=30,widget=forms.TextInput({'class':'form-control','placeholder':"Tu usuario"}), required=True)
    ciudad=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}), required=True)
    email=forms.EmailField(required=False)
    telefono=forms.CharField(max_length=30,widget=forms.TextInput({'class':'form-control','placeholder':"Introduce telefono"}), required=False)
    