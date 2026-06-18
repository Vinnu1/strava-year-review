from fastapi import Request, HTTPException
from schemas.tokens import Token

url = "https://www.strava.com/api/v3/athlete"

async def get_athlete(access_token: Token, request: Request):
    client = request.app.state.client
    headers= {
    'Authorization': f'Bearer {access_token}'
    }
    try:
        response = client.get(url,headers)
        athlete = response.json()
    except Exception as exc:
        print(f'Something went wrong: {exc}')
        raise HTTPException(status_code=500, detail="Something went wrong.")
    #if not athlete.id:
    #    raise HTTPException(status_code=404, detail="Athlete not found")
    return athlete