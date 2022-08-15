import { supabaseClient,supabaseTableItems } from "https://deno.land/x/supabase_deno/mod.ts";
import { ENV } from "./env.ts";

export const sb = new supabaseClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_KEY,
);

export const sbInivations = new supabaseTableItems(sb, "invitations");
