import requests, os

# If user doesn't provide scope, display error and ask to re-authorize
# Get access token and return
'''
	curl -X POST https://www.strava.com/oauth/token \
	-F client_id=YOURCLIENTID \
	-F client_secret=YOURCLIENTSECRET \
	-F code=AUTHORIZATIONCODE \
	-F grant_type=authorization_code
'''

client_id = os.environ["CLIENT_ID"]
client_secret = os.environ["CLIENT_SECRET"]

