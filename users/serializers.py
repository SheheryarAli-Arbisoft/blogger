from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']

    def create(self, validated_data):
        name, email, password = validated_data['name'], validated_data['email'], validated_data['password']
        user = User.objects.create_user(
            email=email, password=password, name=name)
        return user
