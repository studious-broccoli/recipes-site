import type { Metadata } from "next";
import Link from "next/link";
import { fetchRecipe } from "@/lib/api";
import RecipeDetail from "@/components/RecipeDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await fetchRecipe("pryor-family", slug);
  return { title: `${recipe.title} | Arianna's Kitchen` };
}

export default async function PryorFamilyRecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = await fetchRecipe("pryor-family", slug);

  return (
    <div>
      <Link
        href="/pryor-family-recipes"
        className="print:hidden inline-flex items-center gap-1 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-6"
      >
        ← Pryor Family Recipes
      </Link>
      <RecipeDetail recipe={recipe} section="pryor-family" />
    </div>
  );
}
