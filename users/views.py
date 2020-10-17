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
            return JsonResponse(result)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def login(request):
    # Login a user
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            email, password = data.get('email'), data.get('password')
            if '' in [email, password]:
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

    try:
        user = User.objects.get(id=pk)
    except:
        return HttpResponse('User does not exist', status=400)

    # Get user by id
    if request.method == 'GET':
        serializer = UserSerializer(user)
        result = {
            "id": serializer.data.get('id'),
            "name": serializer.data.get('name'),
            "email": serializer.data.get('email')
        }
        return JsonResponse(result)

    # Update user name and password
    if request.method == 'PUT':
        try:
            data = JSONParser().parse(request)
            name = data.get('name')
            if name == '':
                return HttpResponse('All fields are required', 400)
            user.name = name
            user.save()
            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
            }
            return JsonResponse(result)
        except ParseError:
            return HttpResponse('All fields are required', 400)
        except:
            return HttpResponse('Server Error', status=500)

    # Delete a user
    if request.method == "DELETE":
        user.delete()
        return HttpResponse('User deleted successfully')
