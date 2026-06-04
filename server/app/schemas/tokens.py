from pydantic import BaseModel

class AuthCode(BaseModel):
    code: str

class Token(BaseModel):
    token: str