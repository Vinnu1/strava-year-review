from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import core.config
from core.lifespan import lifespan
# from services.activities import get_activities
from routers.router import router

app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router)
# get_activities()

