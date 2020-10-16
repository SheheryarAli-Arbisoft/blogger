from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
import json


@csrf_exempt
def index(request):
    data = json.loads(request.body)

    name, email, password = data['name'], data['email'], data['password']

    if not name or not email or not password:
        return HttpResponse('All fields are required', 400)

    User = get_user_model()
    user = User.objects.create_user(email=email, password=password, name=name)

    return HttpResponse(user)
