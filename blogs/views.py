from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins


class CreateApiView(generics.GenericAPIView, mixins.ListModelMixin):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    # Create a blog
    def post(self, request):
        data = JSONParser().parse(request)
        data['owner'] = request.user.id
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            blog = serializer.save()
            result = {
                "owner": blog.owner.id,
                "title": blog.title,
                "description": blog.description
            }
            return Response(result)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Get all blogs
    def get(self, request):
        return self.list(request)
