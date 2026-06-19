import Image from "next/image";
import type { Recipe, Section } from "@/types/recipe";
import { photoUrl } from "@/lib/api";
import PrintButton from "@/components/PrintButton";

interface RecipeDetailProps {
  recipe: Recipe;
  section: Section;
}

export default function RecipeDetail({ recipe, section }: RecipeDetailProps) {
  const totalMinutes =
    (recipe.prep_time_minutes ?? 0) + (recipe.cook_time_minutes ?? 0);

  return (
    <article className="max-w-2xl mx-auto">
      {recipe.photo && (
        <div className="relative h-72 w-full rounded-xl overflow-hidden mb-6 bg-stone-100 print:h-56">
          <Image
            src={photoUrl(section, recipe.photo)}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold text-stone-800">{recipe.title}</h1>
        <PrintButton />
      </div>

      <p className="text-stone-600 mb-6">{recipe.description}</p>

      {(recipe.servings || recipe.prep_time_minutes || recipe.cook_time_minutes) && (
        <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-lg bg-amber-50 border border-amber-100">
          {recipe.servings && (
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide text-stone-500 font-medium">Servings</div>
              <div className="text-lg font-semibold text-stone-800">{recipe.servings}</div>
            </div>
          )}
          {recipe.prep_time_minutes && (
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide text-stone-500 font-medium">Prep</div>
              <div className="text-lg font-semibold text-stone-800">{recipe.prep_time_minutes} min</div>
            </div>
          )}
          {recipe.cook_time_minutes && (
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide text-stone-500 font-medium">Cook</div>
              <div className="text-lg font-semibold text-stone-800">{recipe.cook_time_minutes} min</div>
            </div>
          )}
          {totalMinutes > 0 && (
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide text-stone-500 font-medium">Total</div>
              <div className="text-lg font-semibold text-stone-800">{totalMinutes} min</div>
            </div>
          )}
        </div>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">
          Ingredients
        </h2>
        <ul className="space-y-2">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-700">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">
          Instructions
        </h2>
        <ol className="space-y-4">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-4 text-stone-700">
              <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-amber-500 text-white text-sm font-bold">
                {i + 1}
              </span>
              <p className="pt-0.5">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
