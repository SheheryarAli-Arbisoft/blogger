from django.db import models
from django.contrib.auth import get_user_model


class Blog(models.Model):
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
