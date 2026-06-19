import httpx, os
from fastapi import HTTPException, Request
from schemas.tokens import AuthCode
from services.athlete import get_athlete

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

oauth_url = "https://www.strava.com/oauth/token"

# maybe we can define body outside and just add the code field
body = {
    "client_id": client_id,
    "client_secret": client_secret,
    "grant_type": "authorization_code"
}

# Send request to strava, get and send back access token 
async def get_access_token(auth_code: AuthCode, request: Request): #  -> str, return type of get_athlete should be used here.
    body["code"] = auth_code
    # print(body)
    client = request.app.state.client
    #async with httpx.AsyncClient() as client:
    try:
        response = await client.post(oauth_url,json=body, timeout=10)
        response.raise_for_status()
        token = response.json().get('access_token')
        print('Access token generated:', response.json())
        return 0
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Strava API request timed out")
    except httpx.HTTPStatusError:
        if(response.status_code == 400):
            raise HTTPException(status_code=400, detail="Strava API Bad request")
    if token is None:
        raise HTTPException(status_code=502, detail="Strava API didn't provide access_token")
    return await get_athlete(token, request)

