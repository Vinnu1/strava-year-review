from pydantic import BaseModel

class Athlete(BaseModel):
    created_at: str | None
    firstname: str | None
    lastname: str | None
    profile: str | None
    profile_medium: str | None
    shoes: list[dict] | None # Can use TypedDict to specify what is inside dict
    sex: str | None
    weight: int | None  # int in kg; add = None to default to None
