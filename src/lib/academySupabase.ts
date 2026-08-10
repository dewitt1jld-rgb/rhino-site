import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/*
  Academy authentication intentionally uses its own localStorage namespace.

  This prevents the individual Academy training login from replacing the
  company's main Rhino Wrangler Supabase authentication session.
*/

const academyStorage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return null;

    return window.localStorage.getItem(`rhino-academy-${key}`);
  },

  setItem: (key: string, value: string) => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(`rhino-academy-${key}`, value);
  },

  removeItem: (key: string) => {
    if (typeof window === "undefined") return;

    window.localStorage.removeItem(`rhino-academy-${key}`);
  },
};

export const academySupabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: academyStorage,
    },
  }
);