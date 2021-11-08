import { createClient } from "@supabase/supabase-js";

export const useSupabase = () => {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLIC_KEY
  );
};
