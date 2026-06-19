"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 transition-colors"
    >
      Print Recipe
    </button>
  );
}
