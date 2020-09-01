from rest_framework import viewsets
from .serializers import BucketSerializer
from .Bucket import Bucket


class BucketView(viewsets.ModelViewSet):
    serializer_class = BucketSerializer
    queryset = Bucket.objects.all()
