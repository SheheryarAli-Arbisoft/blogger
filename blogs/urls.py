from django.urls import path
from .views import CreateApiView

urlpatterns = [
    path('', CreateApiView.as_view())
]
