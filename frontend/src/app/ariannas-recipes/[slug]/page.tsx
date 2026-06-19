import type { Metadata } from "next";
import Link from "next/link";
import { fetchRecipe } from "@/lib/api";
import RecipeDetail from "@/components/RecipeDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await fetchRecipe("ariannas", slug);
  return { title: `${recipe.title} | Arianna's Kitchen` };
}

export default async function AriannaRecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = await fetchRecipe("ariannas", slug);

  return (
    <div>
      <Link
        href="/ariannas-recipes"
        className="print:hidden inline-flex items-center gap-1 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-6"
      >
        ← Arianna&apos;s Recipes
      </Link>
      <RecipeDetail recipe={recipe} section="ariannas" />
    </div>
  );
}
