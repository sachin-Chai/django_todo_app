# tasks/Task.py

from django.db import models


class Bucket(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=240, null=True)
    task_list = models.CharField( max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# String stringToBeInserted = jsonObject.toString();
# //and insert this string into DB
# Read from DB
#
# String json = Read_column_value_logic_here
# JSONObject jsonObject = new JSONObject(json);