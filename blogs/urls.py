from django.urls import path
from .views import CreateApiView, RetrieveUpdateDestroyApiView

urlpatterns = [
    path('', CreateApiView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyApiView.as_view()),
]
