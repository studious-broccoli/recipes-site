import type { Metadata } from "next";
import { fetchAllRecipes } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";

export const metadata: Metadata = {
  title: "Pryor Family Recipes | Arianna's Kitchen",
};

export default async function PryorFamilyRecipesPage() {
  const all = await fetchAllRecipes();
  const recipes = all["pryor-family"] ?? [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-800 mb-2">
        Pryor Family Recipes
      </h1>
      <p className="text-stone-500 mb-8">
        Treasured recipes passed down through the Pryor family.
      </p>

      {recipes.length === 0 ? (
        <p className="text-stone-400">No recipes yet — check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.slug}
              recipe={recipe}
              section="pryor-family"
              href={`/pryor-family-recipes/${recipe.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
