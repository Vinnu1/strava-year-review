import httpx, os
from datetime import datetime

base_url = "https://www.strava.com/api/v3"
body = {
    "after": int(datetime(2026,1,1,0,0,0).timestamp()),
    "per_page": 200,
    "page": 1
}
# access_token = os.environ["ACCESS_TOKEN"]

# Create request to get activities
async def get_activities(access_token):
    print('token', access_token)
    headers= {
    'Authorization': f'Bearer {access_token}'
    }
    async with httpx.AsyncClient() as client:
        request = await client.get(f"{base_url}/athlete/activities", params=body, headers=headers)
        response = request.json()
        print(response)
        return len(response)
    # Store activites and call next page
    # Maybe check if current page have 200 activity length,
    # if yes then call next page and check length