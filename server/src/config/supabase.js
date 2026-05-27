import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

const hasSupabase = Boolean(env.supabaseUrl && env.supabaseServiceRoleKey);

export const supabaseAdmin = hasSupabase
  ? createClient(env.supabaseUrl, env.supabaseServiceRoleKey)
  : null;

export function requireSupabase() {
  if (!supabaseAdmin) {
    const err = new Error('Supabase no está configurado. Define SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en server/.env');
    err.status = 503;
    throw err;
  }
  return supabaseAdmin;
}

export { hasSupabase };
