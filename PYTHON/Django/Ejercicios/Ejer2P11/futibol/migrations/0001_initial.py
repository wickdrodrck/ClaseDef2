# Generated by Django 4.1.9 on 2024-02-15 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EquipoFutibol',
            fields=[
                ('Identificador', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=30)),
                ('puntos', models.IntegerField()),
            ],
        ),
    ]
