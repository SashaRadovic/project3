from django.contrib import admin
from .models import RegularPizza, SicilianPizza, Toppings, DinnerPlatters, Salads, Pasta, Subs, Order
# Register your models here.
admin.site.register(RegularPizza)
admin.site.register(SicilianPizza)
admin.site.register(Toppings)
admin.site.register(DinnerPlatters)
admin.site.register(Salads)
admin.site.register(Pasta)
admin.site.register(Subs)


class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ('time',)

admin.site.register(Order,OrderAdmin)

