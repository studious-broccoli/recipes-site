import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arianna's Kitchen",
  description: "Family recipes from Arianna's Kitchen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-stone-50">
        <header className="print:hidden border-b border-stone-200 bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Arianna&apos;s Kitchen
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-stone-600">
              <Link
                href="/ariannas-recipes"
                className="hover:text-amber-700 transition-colors"
              >
                Arianna&apos;s Recipes
              </Link>
              <Link
                href="/pryor-family-recipes"
                className="hover:text-amber-700 transition-colors"
              >
                Pryor Family Recipes
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <footer className="print:hidden border-t border-stone-200 bg-white mt-auto">
          <div className="max-w-5xl mx-auto px-4 py-4 text-center text-xs text-stone-400">
            Arianna&apos;s Kitchen
          </div>
        </footer>
      </body>
    </html>
  );
}
