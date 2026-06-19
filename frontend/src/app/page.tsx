import Link from "next/link";

const SECTIONS = [
  {
    title: "Arianna's Recipes",
    description: "Personal favorites and kitchen experiments from Arianna.",
    href: "/ariannas-recipes",
    emoji: "👩‍🍳",
  },
  {
    title: "Pryor Family Recipes",
    description: "Treasured recipes passed down through the Pryor family.",
    href: "/pryor-family-recipes",
    emoji: "🏡",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-stone-800 mb-3">
          Arianna&apos;s Kitchen
        </h1>
        <p className="text-stone-500 text-lg">
          A collection of recipes worth sharing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
          >
            <span className="text-5xl">{section.emoji}</span>
            <h2 className="text-xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
              {section.title}
            </h2>
            <p className="text-stone-500 text-sm">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
