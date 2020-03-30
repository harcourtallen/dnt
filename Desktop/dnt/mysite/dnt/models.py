import datetime
from django.db import models
from django.utils import timezone

# Create your models here.


class Votes(models.Model):
    vote = models.IntegerField(default=0)
    vote_date = models.DateTimeField('date published')
    def __str__(self):
        return self.vote