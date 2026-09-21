import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    client = null;
    return client;
  }

  client = createClient(url, key);
  return client;
}

export type Testimonial = {
  id: string;
  quote: string | null;
  author_display: string | null;
  source: string | null;
  rating: number | null;
  screenshot_url: string | null;
  locale: string | null;
  published: boolean;
  created_at: string;
};

export async function getPublishedTestimonials(locale?: string) {
  const supabase = getSupabase();
  if (!supabase) return [];

  let query = supabase
    .from("testimonials")
    .select(
      "id, quote, author_display, source, rating, screenshot_url, locale, published, created_at",
    )
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (locale) {
    query = query.or(`locale.eq.${locale},locale.is.null`);
  }

  const { data, error } = await query;
  if (error || !data) return [];
  return data as Testimonial[];
}
