from django.urls import path
from .views import create, login, get_update_delete

urlpatterns = [
    path('', create),
    path('login/', login),
    path('<int:pk>/', get_update_delete)
]
