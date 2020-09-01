# tasks/serializers.py

from rest_framework import serializers
from .Bucket import Bucket


class BucketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bucket
        fields = ['id', 'title','task_list', 'description', 'created_at', 'updated_at']
