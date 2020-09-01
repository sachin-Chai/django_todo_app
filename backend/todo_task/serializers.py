# tasks/serializers.py

from rest_framework import serializers
from .Todo import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'completed', 'description', 'bucket')
