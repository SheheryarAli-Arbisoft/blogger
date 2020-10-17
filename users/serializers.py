from rest_framework import serializers
from django.contrib.auth import get_user_model
from blogs.models import Blog

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=6)

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']

    def create(self, validated_data):
        name, email, password = validated_data['name'], validated_data['email'], validated_data['password']
        user = User.objects.create_user(
            email=email, password=password, name=name)
        return user
