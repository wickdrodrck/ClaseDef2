from .models import Pelicula
from .serializers import PeliculaSerializer
from rest_framework import viewsets,generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class PeliculasViewSet(viewsets.ModelViewSet):
  queryset = Pelicula.objects.all()
  serializer_class = PeliculaSerializer
  
  
  
class PeliDetailView(viewsets.ModelViewSet):
  queryset = Pelicula.objects.all()
  serializer_class = PeliculaSerializer
  
  def retrieve(self,request,pk):
    pelicula=get_object_or_404(self.queryset, titulo=pk)
    item=PeliculaSerializer(pelicula)
    return Response(item.data)

    

class PeliculaCreateView(generics.CreateAPIView):
  queryset = Pelicula.objects.all()
  serializer_class = PeliculaSerializer
  
  def create(self, request, *args, **kwargs):
   # return super(PeliculaCreateView,self).create(request, *args, **kwargs)
    super(PeliculaCreateView,self).create(request, *args, **kwargs)   
    response={'message':'Creado con éxito',
              'result':request.data}
    return Response(response)


class PeliculaDetailView(generics.RetrieveAPIView):
  queryset = Pelicula.objects.all()
  serializer_class = PeliculaSerializer
  
  def retrieve(self, request, *args, **kwargs):
    return super(PeliculaDetailView,self).retrieve(request, *args, **kwargs)
  