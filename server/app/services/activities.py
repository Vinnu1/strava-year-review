import httpx, os, json 
from datetime import datetime
from schemas.tokens import Token
from schemas.year import Year
from fastapi import Request
from services.data_analysis import data_analysis

strava_api_uri = "https://www.strava.com/api/v3"
# access_token = os.environ["ACCESS_TOKEN"]

# Create request to get activities
async def get_activities(year: Year, access_token: Token, request: Request): # add return type later
    # print('token', access_token)
    body = {
    "after": int(datetime(year,1,1,0,0,0).timestamp()), # After 2026
    "before": int(datetime(year + 1,1,1,0,0,0).timestamp()), # - Apply before if needed for activities before this timestamp
    "per_page": 200,
    "page": 1
    }
    headers= {
    'Authorization': f'Bearer {access_token}'
    }
    client = request.app.state.client
    # async with httpx.AsyncClient() as client:
    request = await client.get(f"{strava_api_uri}/athlete/activities", params=body, headers=headers)
    response = request.json()
    #print(response)
    #with open("./tests/dump.json", "w") as f:
    #    json.dump(response, f)
    analysis_results = data_analysis(response)
    return analysis_results
    # Store activites and call next page
    # Maybe check if current page have 200 activity length,
    # if yes then call next page and check length
    # It might be better to just set cookie and send athlete details (name, photo, etc.)
    # and on the year review page, make request for activities