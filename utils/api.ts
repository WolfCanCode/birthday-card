import { supabaseClient,supabaseTableItems } from "https://deno.land/x/supabase_deno/mod.ts";
export const sb = new supabaseClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_KEY") || "",
);

export const sbInivations = new supabaseTableItems(sb, "invitations");
