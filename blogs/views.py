from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics, mixins


class CreateApiView(generics.GenericAPIView, mixins.ListModelMixin):
    queryset = Blog.objects.order_by('-timestamp')
    serializer_class = BlogSerializer

    # Create a blog
    def post(self, request):
        data = JSONParser().parse(request)
        data['owner'] = request.user.id
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            blog = serializer.save()
            result = {
                "id": blog.id,
                "owner": blog.owner.id,
                "title": blog.title,
                "description": blog.description
            }
            return Response(result)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Get all blogs
    def get(self, request):
        return self.list(request)


class RetrieveUpdateDestroyApiView(generics.RetrieveDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def put(self, request, pk):
        data = JSONParser().parse(request)
        title, description = data['title'], data['description']
        blog = Blog.objects.get(id=pk)
        blog.title = title
        blog.description = description
        blog.save()
        result = {
            "id": blog.id,
            "owner": blog.owner.id,
            "title": blog.title,
            "description": blog.description
        }
        return Response(result)
