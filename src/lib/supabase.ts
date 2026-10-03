import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'

// Client intended for browser/client-side usage. 
// Uses the anonymous key, relying on Row Level Security (RLS) for data protection.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
