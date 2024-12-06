// utils/supabase/client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ktceocdocbuhokgehohd.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase environment variables are missing.');
    throw new Error('Missing Supabase URL or API Key.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
