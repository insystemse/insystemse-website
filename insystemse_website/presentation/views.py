from django.shortcuts import render
from projects.models import Project


def index(request):
    context = {
    }
    return render(request, 'index.html', context)