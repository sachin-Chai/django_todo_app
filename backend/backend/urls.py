
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
# from tasks import views as tasks
# from bucket import views as bucketViews
from . import project_views

# router = routers.DefaultRouter()
# router.register(r'^todos', tasks.TodoView, 'todos')
# router.register(r'^buckets', bucketViews.BucketView, 'bucket')

urlpatterns = {
    path('admin/', admin.site.urls),
    # path('api/', include(router.urls)),
    url(r'^api/todos', project_views.tasks, name="todos"),
    url(r'^api/buckets', project_views.buckets, name="buckets")

}