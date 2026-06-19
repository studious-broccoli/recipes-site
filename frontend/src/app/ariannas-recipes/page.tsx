import type { Metadata } from "next";
import { fetchAllRecipes } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";

export const metadata: Metadata = {
  title: "Arianna's Recipes | Arianna's Kitchen",
};

export default async function AriannaRecipesPage() {
  const all = await fetchAllRecipes();
  const recipes = all["ariannas"] ?? [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-800 mb-2">
        Arianna&apos;s Recipes
      </h1>
      <p className="text-stone-500 mb-8">
        Personal favorites and kitchen experiments.
      </p>

      {recipes.length === 0 ? (
        <p className="text-stone-400">No recipes yet — check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.slug}
              recipe={recipe}
              section="ariannas"
              href={`/ariannas-recipes/${recipe.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
