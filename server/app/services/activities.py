import httpx, os, json 
from datetime import datetime
from schemas.tokens import Token
from fastapi import Request

base_url = "https://www.strava.com/api/v3"
body = {
    # "after": int(datetime(2026,1,1,0,0,0).timestamp()),
    "per_page": 200,
    "page": 1
}
# access_token = os.environ["ACCESS_TOKEN"]

# Create request to get activities
async def get_activities(access_token: Token, request: Request): # add return type later
    print('token', access_token)
    headers= {
    'Authorization': f'Bearer {access_token}'
    }
    client = request.app.state.client
    # async with httpx.AsyncClient() as client:
    request = await client.get(f"{base_url}/athlete/activities", params=body, headers=headers)
    response = request.json()
    print(response)
    with open("./tests/dump.json", "w") as f:
        json.dump(response, f)
    return len(response)
    # Store activites and call next page
    # Maybe check if current page have 200 activity length,
    # if yes then call next page and check length
    # It might be better to just set cookie and send athlete details (name, photo, etc.)
    # and on the year review page, make request for activities