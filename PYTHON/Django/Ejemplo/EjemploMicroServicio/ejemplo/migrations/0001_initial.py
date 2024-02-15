# Generated by Django 3.2.9 on 2022-02-11 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pelicula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=150)),
                ('estreno', models.IntegerField(default=2000)),
                ('imagen', models.URLField(help_text='De imdb mismo')),
                ('resumen', models.TextField(help_text='Descripción corta')),
            ],
            options={
                'ordering': ['titulo'],
            },
        ),
    ]
