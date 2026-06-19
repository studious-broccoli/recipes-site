import type { Recipe, RecipeSummary, Section } from "@/types/recipe";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export function photoUrl(section: Section, filename: string): string {
  return `${API_URL}/photos/${section}/${filename}`;
}

export async function fetchAllRecipes(): Promise<Record<Section, RecipeSummary[]>> {
  const res = await fetch(`${API_URL}/recipes`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export async function fetchRecipe(section: Section, slug: string): Promise<Recipe> {
  const res = await fetch(`${API_URL}/recipes/${section}/${slug}`);
  if (!res.ok) throw new Error(`Recipe not found: ${slug}`);
  return res.json();
}
