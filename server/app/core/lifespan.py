from contextlib import asynccontextmanager
from fastapi import FastAPI
import httpx

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with httpx.AsyncClient() as client:
        print("Lifespan Started.")
        app.state.client = client
        
        yield
        
        # client will close automatically but if for some reason it doesn't we will manually close it
        await client.aclose()
        print("Lifespan closed.")