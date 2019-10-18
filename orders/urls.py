from django.urls import path
from .views import OrdersListView

from . import views

urlpatterns = [
    path("", views.index, name="orders-index"),
    path("about/", views.about, name="orders-about"),
    path("order/", views.order, name="orders-order"),
]
