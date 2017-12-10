from django.shortcuts import redirect
from django.core.urlresolvers import reverse_lazy

def redirect_to_home(request):
    return redirect(reverse_lazy('home'))