from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return 'templates/dnt.html'

# def index(request):
#     return HttpResponse("Welcome to #dnt")

def total(request):
    return HttpResponse("find this number shoot")