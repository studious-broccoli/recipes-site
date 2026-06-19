from __future__ import annotations

import json
from pathlib import Path

from fastapi import APIRouter, HTTPException

from models import Recipe, RecipeSummary, Section

router = APIRouter(prefix="/recipes", tags=["recipes"])

DATA_DIR = Path(__file__).parent.parent / "data"


def _load_recipe(section: Section, slug: str) -> Recipe:
    """Load a single recipe JSON file from disk.

    Args:
        section: The collection the recipe belongs to.
        slug: The recipe's filename stem (no .json extension).

    Returns:
        The parsed Recipe model.

    Raises:
        HTTPException: If the file does not exist or cannot be parsed.
    """
    path = DATA_DIR / section.value / f"{slug}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Recipe '{slug}' not found")
    return Recipe.model_validate(json.loads(path.read_text(encoding="utf-8")))


def _list_recipes(section: Section) -> list[RecipeSummary]:
    """Return summary objects for all recipes in a section.

    Args:
        section: The collection to list.

    Returns:
        List of RecipeSummary objects sorted by title.
    """
    section_dir = DATA_DIR / section.value
    summaries: list[RecipeSummary] = []
    for path in sorted(section_dir.glob("*.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        summaries.append(RecipeSummary.model_validate(data))
    return sorted(summaries, key=lambda r: r.title)


@router.get("", response_model=dict[str, list[RecipeSummary]])
def list_all_recipes() -> dict[str, list[RecipeSummary]]:
    """Return all recipes grouped by section.

    Returns:
        A dict mapping section name to list of recipe summaries.
    """
    return {
        Section.ariannas.value: _list_recipes(Section.ariannas),
        Section.pryor_family.value: _list_recipes(Section.pryor_family),
    }


@router.get("/{section}/{slug}", response_model=Recipe)
def get_recipe(section: Section, slug: str) -> Recipe:
    """Return the full detail for a single recipe.

    Args:
        section: The collection the recipe belongs to.
        slug: The recipe slug (matches filename stem).

    Returns:
        The full Recipe object.
    """
    return _load_recipe(section, slug)
