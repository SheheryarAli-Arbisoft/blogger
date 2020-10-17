from django.urls import path
from .views import CreateApiView, LoginApiView, UpdateDeleteView, PasswordView

urlpatterns = [
    path('', CreateApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('<int:pk>/', UpdateDeleteView.as_view()),
    path('<int:pk>/password', PasswordView.as_view())
]
