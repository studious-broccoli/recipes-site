from __future__ import annotations

from enum import Enum

from pydantic import BaseModel


class Section(str, Enum):
    """The two recipe collections on the site."""

    ariannas = "ariannas"
    pryor_family = "pryor-family"


class RecipeSummary(BaseModel):
    """Minimal recipe data shown on list pages."""

    slug: str
    title: str
    description: str
    photo: str | None = None


class Recipe(RecipeSummary):
    """Full recipe detail including ingredients and steps."""

    servings: int | None = None
    prep_time_minutes: int | None = None
    cook_time_minutes: int | None = None
    ingredients: list[str]
    steps: list[str]
