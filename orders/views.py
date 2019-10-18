from django.http import HttpResponse
import json
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.contrib.auth.models import User
from users.models import Profile
from .models import Toppings, RegularPizza, SicilianPizza, DinnerPlatters, Salads, Subs, Pasta, Order
from django.views.generic import ListView

# Create your views here.
def index(request):
    context = {
        'toppings': Toppings.objects.all(),
        'regular': RegularPizza.objects.all(),
        'sicilian': SicilianPizza.objects.all(),
         'dinner': DinnerPlatters.objects.all(),
          'salads': Salads.objects.all(),
           'subs': Subs.objects.all(),
           'pasta': Pasta.objects.all(),
    }
    return render(request, 'orders/index.html', context)

@login_required
def order(request):
    context = {
        'toppings': Toppings.objects.all(),
        'regular': RegularPizza.objects.all(),
        'sicilian': SicilianPizza.objects.all(),
         'dinner': DinnerPlatters.objects.all(),
          'salads': Salads.objects.all(),
           'subs': Subs.objects.all(),
           'pasta': Pasta.objects.all(),
           'user':request.user,
           'order':Order.objects.all(),
    }
    
    if request.method=='POST':
        user=request.user
        
        
        j= request.POST['finalInput']
        placement=json.loads(j)
        
        print(placement)
        Order.objects.create(user=user, placement=placement)
    return render(request, 'orders/order.html', context)





class OrdersListView(ListView):
    model= Toppings
    template_name = 'orders/index.html'
    context_object_name ='toppings'


def about(request):
    return render(request, 'orders/about.html')
