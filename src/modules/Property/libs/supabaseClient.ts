import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseClient;