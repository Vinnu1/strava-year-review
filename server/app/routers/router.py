from fastapi import APIRouter,Request, Response
from schemas.tokens import AuthCode, Token
from services.authorize import get_access_token
from services.activities import get_activities

router = APIRouter()
@router.get("/") #, response_model=ActivityData
def home():
    # replace later - POST req, check for access token in body
    # get activities
    return {"msg":"Fastapi is working!"}

@router.post("/authorize") #response_model=Token
async def get_access(auth_code: AuthCode, request: Request): # -> str , response: Response
    # print("auth code:", auth_code.code)
    # response.status_code = 201
    athlete = await get_access_token(auth_code.code, request)
    return athlete

@router.post("/activities")
async def activities(access_token: Token, request: Request):
    activities = await get_activities(access_token.token, request)
    return activities