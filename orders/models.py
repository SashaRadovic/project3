from django.db import models
from django.contrib.auth.models import User
from users.models import Profile
from jsonfield import JSONField
from django.conf import settings

# Create your models here.
class RegularPizza(models.Model):
    name=models.CharField(max_length=30)
    pricesmall =models.DecimalField(max_digits=6, decimal_places=2)
    pricebig =models.DecimalField(max_digits=6, decimal_places=2)

    

    def __str__(self):
        return f'{self.name} Regular Pizza'

class SicilianPizza(models.Model):
    name=models.CharField(max_length=30)
    pricesmall =models.DecimalField(max_digits=6, decimal_places=2)
    pricebig =models.DecimalField(max_digits=6, decimal_places=2)  

    def __str__(self):
        return f'{self.name} Sicilian Pizza'  

class Toppings(models.Model):
     name=models.CharField(max_length=30)

     class Meta:
         verbose_name_plural ="Toppings"

     def __str__(self):
        return f'{self.name} Toppings'  

class DinnerPlatters(models.Model):
    name=models.CharField(max_length=30)
    pricesmall =models.DecimalField(max_digits=6, decimal_places=2)
    pricebig =models.DecimalField(max_digits=6, decimal_places=2)  

    class Meta:
         verbose_name_plural ="DinnerPlatters"

    def __str__(self):
        return f'{self.name} DinnerPlatters'  

class Salads(models.Model):
    name=models.CharField(max_length=30)
    price =models.DecimalField(max_digits=6, decimal_places=2)

    class Meta:
         verbose_name_plural ="Salads"

    def __str__(self):
        return f'{self.name} Salads'  

    

class Pasta(models.Model):
    name=models.CharField(max_length=30)
    price =models.DecimalField(max_digits=6, decimal_places=2)

    class Meta:
         verbose_name_plural ="Pasta"

    def __str__(self):
        return f'{self.name} Pasta'  

class Subs(models.Model):
    name=models.CharField(max_length=30)
    pricesmall =models.DecimalField(max_digits=6, decimal_places=2)
    pricebig =models.DecimalField(max_digits=6, decimal_places=2) 
    extras =models.BooleanField(default=False)

    class Meta:
         verbose_name_plural ="Subs"

    def __str__(self):
        return f'{self.name} Subs'  

class Order(models.Model):
    time=models.DateTimeField(auto_now_add=True)
    
    user =models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    placement=JSONField()

    def __str__(self):
        return f'{self.name} placement ' 

    class Meta:
         verbose_name_plural ="Orders"

    def __str__(self):
        return f'{self.user} Order on {self.time}'  
        