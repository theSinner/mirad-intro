from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import Context
import datetime

def home(request):
	return render_to_response('home.html',{})
