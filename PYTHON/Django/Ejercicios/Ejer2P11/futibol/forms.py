from django import forms


class FrmPartido(forms.Form):
    equipolocal=forms.CharField(max_length=20,widget=forms.TextInput({'class':'form-control','placeholder':"Equipo local"}))
    equipovisitante=forms.CharField(max_length=20, widget=forms.TextInput({'class':'form-control','placeholder':"Equipovisitante"}))
    goleslocal=forms.IntegerField()
    golesvisitante=forms.IntegerField()