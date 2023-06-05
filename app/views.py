from pipes import Template
from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context 
from django.conf import settings
import os

def home(request):
    path = os.path.join(settings.BASE_DIR, 'app/templates/app/index.html')
    
    with open(path, 'r') as arquivo_html:
        conteudo_html = arquivo_html.read()
        
    template = Template(conteudo_html)
    contexto = Context()
    documento_renderizado = template.render(contexto)
    
    return HttpResponse(documento_renderizado)

def login(request):
    path = os.path.join(settings.BASE_DIR, 'app/templates/app/login.html')
    
    with open(path, 'r') as arquivo_html:
        conteudo_html = arquivo_html.read()
        
    template = Template(conteudo_html)
    contexto = Context()
    documento_renderizado = template.render(contexto)
    
    return HttpResponse(documento_renderizado)
