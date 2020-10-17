from django.http import HttpResponse, JsonResponse
from django.core.validators import EmailValidator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
import json

User = get_user_model()


@csrf_exempt
def create(request):
    # Create a new user
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            result = {
                "id": serializer.data.get('id'),
                "name": serializer.data.get('name'),
                "email": serializer.data.get('email'),
            }
            return JsonResponse(result, status=200)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def login(request):
    # Login a user
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            email, password = data.get('email'), data.get('password')
            if None in [email, password]:
                return HttpResponse('All fields are required', 400)
            user = authenticate(email=email, password=password)
            if user is None:
                return HttpResponse('Invalid credentials', status=401)
            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
            return JsonResponse(result)
        except ParseError:
            return HttpResponse('All fields are required', 400)
        except:
            return HttpResponse('Server Error', status=500)


@csrf_exempt
def get_update_delete(request, pk):
    # Get user by id
    if request.method == 'GET':
        try:
            user = User.objects.get(id=pk)

            result = {
                "id": user.id,
                "name": user.name,
            }

            return JsonResponse(result)
        except:
            return HttpResponse('User does not exist', status=400)

    # Update user name and password
    if request.method == 'PUT':
        try:
            user = User.objects.get(id=pk)

            data = json.loads(request.body)

            if 'name' in data.keys():
                name = data['name']
                user.name = name
            elif 'password' in data.keys():
                password = data['password']
                user.set_password(password)

            user.save()

            result = {
                "id": user.id,
                "name": user.name
            }

            return JsonResponse(result)
        except:
            return HttpResponse('User does not exist', status=400)

    # Delete a user
    if request.method == "DELETE":
        try:
            user = User.objects.get(id=pk)

            user.delete()

            return HttpResponse('User deleted successfully')
        except:
            return HttpResponse('User does not exist', status=400)
