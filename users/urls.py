from django.urls import path
from .views import CreateApiView, LoginApiView, RetrieveUpdateDeleteView

urlpatterns = [
    path('', CreateApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteView.as_view()),
]
