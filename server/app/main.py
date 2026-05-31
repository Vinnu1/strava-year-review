from fastapi import FastAPI
import core.config
from services.activities import get_activities

app = FastAPI()

get_activities()

@app.get("/")
def home():
    return {"message":"Strava API server is working!"}