# tasks/Task.py

from django.db import models
from bucket.Bucket import Bucket


class Todo(models.Model):
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default='false')
    description = models.CharField(max_length=240, null=True)
    bucket = models.ForeignKey(
        Bucket, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title
