from django.urls import path
from .views import CreateApiView, LoginApiView, GetApiView, UpdateDestroyApiView, PasswordApiView

urlpatterns = [
    path('', CreateApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('current/', GetApiView.as_view()),
    path('<int:pk>/', UpdateDestroyApiView.as_view()),
    path('<int:pk>/password', PasswordApiView.as_view())
]
