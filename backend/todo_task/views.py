# tasks/views.py

from rest_framework import viewsets  # add this
from .serializers import TodoSerializer  # add this
from .Todo import Todo  # add this
from django.http import JsonResponse


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


