from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from routers.recipes import router as recipes_router

app = FastAPI(title="Arianna's Kitchen API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://www.ariannaskitchen.com",
    ],
    allow_methods=["GET"],
    allow_headers=["*"],
)

PHOTOS_DIR = Path(__file__).parent / "photos"
app.mount("/photos", StaticFiles(directory=str(PHOTOS_DIR)), name="photos")

app.include_router(recipes_router)
