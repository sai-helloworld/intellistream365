from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#request handler
#about this file 
# the views.py file is where you define the request handlers
# a request handler is a function that takes a request and returns a response 
# the request is an object that contains information about the request
#the response is an object that contains information about the response   

def say_hello(request):
    return render(request,'index.html', {'name': 'SaiPavan <sup>billionaire</sup>'})