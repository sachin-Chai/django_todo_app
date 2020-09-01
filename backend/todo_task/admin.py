# tasks/admin.py

from django.contrib import admin
from .Todo import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed', 'description','bucket')


# Register your models here.
admin.site.register(Todo, TodoAdmin)  # add this
