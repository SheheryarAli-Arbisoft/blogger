from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model, authenticate
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer

User = get_user_model()


@api_view(['POST'])
def create(request):
    # Create a new user
    data = JSONParser().parse(request)
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        result = {
            "id": serializer.data.get('id'),
            "name": serializer.data.get('name'),
            "email": serializer.data.get('email'),
        }
        return Response(result)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    # Login a user
    try:
        data = JSONParser().parse(request)
        email, password = data.get('email'), data.get('password')
        if '' in [email, password]:
            return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(email=email, password=password)
        if user is None:
            return Response('Invalid credentials', status=status.HTTP_401_UNAUTHORIZED)
        result = {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
        return Response(result)
    except ParseError:
        return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def get_update_delete(request, pk):

    try:
        user = User.objects.get(id=pk)
    except:
        return Response('User does not exist', status=status.HTTP_400_BAD_REQUEST)

    # Get user by id
    if request.method == 'GET':
        serializer = UserSerializer(user)
        result = {
            "id": serializer.data.get('id'),
            "name": serializer.data.get('name'),
            "email": serializer.data.get('email')
        }
        return Response(result)

    # Update user name and password
    if request.method == 'PUT':
        try:
            data = JSONParser().parse(request)
            name = data.get('name')
            if name == '':
                return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
            user.name = name
            user.save()
            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
            }
            return Response(result)
        except ParseError:
            return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Delete a user
    if request.method == "DELETE":
        user.delete()
        return Response('User deleted successfully')
