import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://cugxuqnzlodvrxrgnelw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1Z3h1cW56bG9kdnJ4cmduZWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MzA0MDIsImV4cCI6MjAxMTAwNjQwMn0.6DFpj6jZks_0BUQs9ggDoKN4y5YFYotKVpwCWwL0pgA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
