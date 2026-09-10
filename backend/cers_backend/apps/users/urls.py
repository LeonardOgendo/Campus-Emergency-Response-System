from django.urls import path
from .views import RegisterUserView, LoginUserView, LogoutView


urlpatterns = [
    path('register/', RegisterUserView.as_view(), name="user-register"),
    path('login/', LoginUserView.as_view(), name='user-login'),
    path('logout/', LogoutView.as_view(), name='logout')
]
