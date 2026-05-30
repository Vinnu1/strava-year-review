from fastapi import FastAPI
#from core.config import secrets

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Strava API server is working!"}