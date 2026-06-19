export type Section = "ariannas" | "pryor-family";

export interface RecipeSummary {
  slug: string;
  title: string;
  description: string;
  photo: string | null;
}

export interface Recipe extends RecipeSummary {
  servings: number | null;
  prep_time_minutes: number | null;
  cook_time_minutes: number | null;
  ingredients: string[];
  steps: string[];
}

export interface RecipesBySection {
  ariannas: RecipeSummary[];
  "pryor-family": RecipeSummary[];
}
