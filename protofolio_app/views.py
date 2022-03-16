from django.core import mail
from multiprocessing import context
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import backEnd, frontEnd, myWorks, tools
from django.contrib import messages
from django.core.mail import send_mail
import smtplib
import asynchat
# Create your views here.


def app(request):
    context = None
    myworks = myWorks.objects.all()
    front = frontEnd.objects.all()
    back = backEnd.objects.all()
    tool = tools.objects.all()
    context = {
        'myworks': myworks,
        'frontend': front,
        'backend': back,
        'tools': tool,
    }
    return render(request, 'index.html', context)


# Contact me

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        emails = request.POST['email']
        subject = request.POST['project']
        message = request.POST['message']
        # message = 'request'
        data = {
            "name":name,
            "email":emails,
            "subject": subject,
            "message": message,
        }
        message_all = f'''
        New message =>{data['message']}\n
        From => {data['email']}
        '''
        # send_mail(data['project'], message_all, "", ['dalamamir118@gmail.com'],
        
        send_mail(f"Subject =>{ data['subject']}", message_all, data['name'], [
                  'brahimelorchi1937@gmail.com'], fail_silently=False,)
        return redirect('home')
    else:
        return redirect('home')

def cont(request):
    connection = mail.get_connection()

    # Manually open the connection
    connection.open()

    # Construct an email message that uses the connection
    email1 = mail.EmailMessage(
        'Hello',
        'Body goes here',
        'from@example.com',
        ['dalamamir118@gmail.com'],
        connection=connection,
    )
    email1.send()  # Send the email

    # Construct two more messages
   
    # The connection was already open so send_messages() doesn't close it.
    # We need to manually close the connection.
    connection.close()
