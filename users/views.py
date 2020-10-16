from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate
import json

User = get_user_model()


@csrf_exempt
def create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            name, email, password = data['name'], data['email'], data['password']

            if not name or not email or not password:
                return HttpResponse('All fields are required', 400)

            user = User.objects.create_user(
                email=email, password=password, name=name)

            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
            }

            return JsonResponse(result)
        except:
            return HttpResponse('Server Error', status=500)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            email, password = data['email'], data['password']

            if not email or not password:
                return HttpResponse('All fields are required', 400)

            user = authenticate(email=email, password=password)

            if user is None:
                return HttpResponse('Invalid credentials', status=401)

            result = {
                "id": user.id
            }

            return JsonResponse(result)
        except:
            return HttpResponse('Server Error', status=500)


@csrf_exempt
def get_update_delete(request, pk):
    if request.method == 'GET':
        try:
            user = User.objects.get(id=pk)

            result = {
                "id": user.id,
                "name": user.name
            }

            return JsonResponse(result)
        except:
            return HttpResponse('Server Error', status=500)
