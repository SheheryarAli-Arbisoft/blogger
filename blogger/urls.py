from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from .settings import REACT_ROUTES

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/blogs/', include('blogs.urls')),
    re_path(r'|'.join(REACT_ROUTES), TemplateView.as_view(
        template_name='index.html')),
    path('', TemplateView.as_view(template_name='index.html')),
]
