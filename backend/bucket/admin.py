# tasks/admin.py

from django.contrib import admin
from .Bucket import Bucket  # add this


class BucketAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'task_list', 'created_at', 'updated_at')


admin.site.register(Bucket, BucketAdmin)
