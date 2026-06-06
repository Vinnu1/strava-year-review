from fastapi import APIRouter, Response
from schemas.tokens import AuthCode
from services.authorize import get_access_token

router = APIRouter()
@router.get("/") #, response_model=ActivityData
def home():
    # replace later - POST req, check for access token in body
    # get activities
    return {"msg":"Fastapi is working!"}

@router.post("/authorize")
async def get_access(auth_code: AuthCode): #, response: Response
    print("auth code:", auth_code.code)
    # response.status_code = 201
    access_token = await get_access_token(auth_code.code)
    return access_token

