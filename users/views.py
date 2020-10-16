from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate
import json

User = get_user_model()


@csrf_exempt
def index(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        name, email, password = data['name'], data['email'], data['password']

        if not name or not email or not password:
            return HttpResponse('All fields are required', 400)

        user = User.objects.create_user(
            email=email, password=password, name=name)

        return HttpResponse(user)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        email, password = data['email'], data['password']

        if not email or not password:
            return HttpResponse('All fields are required', 400)

        user = authenticate(email=email, password=password)

        if user is None:
            return HttpResponse('Invalid credentials', status=401)
        return HttpResponse('Login successful')
