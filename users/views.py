from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from orders.models import Order
from .forms import UserRegistrationForm, UserUpdateForm, ProfilUpdateForm


# Create your views here.
def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            first_name = form.cleaned_data['first_name'],
            last_name = form.cleaned_data['last_name'],
            email=form.cleaned_data['email']
            messages.success(request, f'Account created for {username}! You may log in now!')
            return redirect('login')
    else:
        form =UserRegistrationForm()
    return render(request, 'users/register.html', {'form':form})

    
@login_required
def profile(request):
    if request.method == "POST":
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfilUpdateForm(request.POST, request.FILES, instance=request.user.profile)

        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Your account has been updated!')
            return redirect('profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfilUpdateForm(instance=request.user.profile)

    userOrders = Order.objects.filter(user=request.user)

    context ={
        'u_form': u_form,
        'p_form': p_form,
        'userOrders':userOrders,
        
    }
    return render(request, 'users/profile.html', context)