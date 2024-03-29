# Generated by Django 4.1.9 on 2024-02-18 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('usuario', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('contraseña', models.CharField(max_length=20)),
                ('perfil', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='DatosUsuarios',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('ciudad', models.CharField(max_length=30)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('telefono', models.CharField(max_length=7)),
                ('nombrecliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crudbbdd.usuarios')),
            ],
        ),
    ]
