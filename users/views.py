from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model, authenticate
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import Http404

User = get_user_model()


class CreateApiView(APIView):
    # Create a new user
    def post(self, request):
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


class LoginApiView(APIView):
    # Login a user
    def post(self, request):
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
        except:
            return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RetrieveUpdateDeleteView(APIView):
    # Getting the user object from the model
    def get_object(self, pk):
        try:
            return User.objects.get(id=pk)
        except:
            raise Http404

    # Get a single user
    def get(self, request, pk):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        result = {
            "id": serializer.data.get('id'),
            "name": serializer.data.get('name'),
            "email": serializer.data.get('email')
        }
        return Response(result)

    # Update user name
    def put(self, request, pk):
        try:
            data = JSONParser().parse(request)
            name = data.get('name')
            if name == '':
                return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
            user = self.get_object(pk)
            user.name = name
            user.save()
            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
            }
            return Response(result)
        except:
            return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Delete a user
    def delete(self, request, pk):
        user.delete()
        return Response('User deleted successfully')


class PasswordView(APIView):
    # Getting the user object from the model
    def get_object(self, pk):
        try:
            return User.objects.get(id=pk)
        except:
            raise Http404

    # Update user password
    def put(self, request, pk):
        try:
            data = JSONParser().parse(request)
            password = data.get('password')
            if password == '':
                return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
            user = self.get_object(pk)
            user.set_password(password)
            user.save()
            result = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
            }
            return Response(result)
        except:
            return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
