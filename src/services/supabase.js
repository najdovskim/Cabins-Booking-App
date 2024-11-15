import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pbopnneuuetwzceqawoc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBib3BubmV1dWV0d3pjZXFhd29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMDE1NDIsImV4cCI6MjA0NTg3NzU0Mn0.Zpx7vBRYIa5MkYVv9lzdyCj8GLUxd4X5y_wuiWUGHCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
