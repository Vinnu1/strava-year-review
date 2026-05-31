import requests, os
from datetime import datetime

base_url = "https://www.strava.com/api/v3"
body = {
    "after": int(datetime(2026,1,1,0,0,0).timestamp()),
    "per_page": 200,
    "page": 1
}
access_token = os.environ["ACCESS_TOKEN"]
headers= {
    'Authorization': f'Bearer {access_token}'
}

# If user doesn't provide scope, display error and ask to re-authorize
# Authorize URL - https://www.strava.com/oauth/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read,activity:read,activity:read_all
 
# Create request to get activities
def get_activities():
    request = requests.get(f"{base_url}/athlete/activities", params=body, headers=headers)
    response = request.json()
    print(len(response)) 
    # Store activites and call next page
    # Maybe check if current page have 200 activity length,
    # if yes then call next page and check length