from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def login(request):
    if request.method == 'POST':
        credentials = json.loads(request.body)
        user = authenticate(
            email=credentials['email'], password=credentials['password'])
        if user is not None:
            return HttpResponse('Login successful')
        else:
            return HttpResponse('Invalid credentials', status=401)
