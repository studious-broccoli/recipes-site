import Image from "next/image";
import Link from "next/link";
import type { RecipeSummary, Section } from "@/types/recipe";
import { photoUrl } from "@/lib/api";

interface RecipeCardProps {
  recipe: RecipeSummary;
  section: Section;
  href: string;
}

export default function RecipeCard({ recipe, section, href }: RecipeCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {recipe.photo ? (
        <div className="relative h-48 w-full bg-stone-100">
          <Image
            src={photoUrl(section, recipe.photo)}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-amber-50 flex items-center justify-center">
          <span className="text-4xl">🍽️</span>
        </div>
      )}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
          {recipe.title}
        </h2>
        <p className="text-sm text-stone-500 line-clamp-2">{recipe.description}</p>
      </div>
    </Link>
  );
}
