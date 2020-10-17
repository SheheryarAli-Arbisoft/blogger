from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model, authenticate
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework import generics, mixins

User = get_user_model()


class CreateApiView(APIView):
    permission_classes = [AllowAny]

    # Create a new user
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user).key
            result = {
                "token": token
            }
            return Response(result)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginApiView(APIView):
    permission_classes = [AllowAny]

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
            token = Token.objects.get(user=user).key
            result = {
                "token": token
            }
            return Response(result)
        except:
            return Response('Server Error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetApiView(APIView):
    # Get current user
    def get(self, request):
        user = request.user
        result = {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
        return Response(result)


class UpdateDestroyApiView(generics.GenericAPIView, mixins.DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Update user name
    def put(self, request, pk):
        try:
            data = JSONParser().parse(request)
            name = data.get('name')
            if name == '':
                return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
            user = User.objects.get(id=pk)
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
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class PasswordApiView(APIView):
    # Update user password
    def put(self, request, pk):
        try:
            data = JSONParser().parse(request)
            password = data.get('password')
            if password == '':
                return Response('All fields are required', status=status.HTTP_400_BAD_REQUEST)
            user = User.objects.get(id=pk)
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
