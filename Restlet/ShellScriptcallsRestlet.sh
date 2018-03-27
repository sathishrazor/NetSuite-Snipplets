#!/bin/sh
 
#Put your RESTlet url here.
my_url="https://123456.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=126&deploy=1"
 
#Put the body of your request in a file named data.json.
DATA_FILE="@data.json"
 
CONTENT_FLAG="Content-Type: application/json" 

#Update the following line with valid values from your NetSuite account. 
AUTH_STRING="Authorization: NLAuth nlauth_account=123456, nlauth_email=jsmith%40ABC.com, nlauth_signature=xxxx"
 
#Capture the response from your RESTlet.
/usr/bin/curl -H "${CONTENT_FLAG}" -H "${AUTH_STRING}" -d "${DATA_FILE}" $my_url > /tmp/restlet_response.txt