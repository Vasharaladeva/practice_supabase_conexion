
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckidmbbatnezdwrvzqka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNraWRtYmJhdG5lemR3cnZ6cWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMjI1NzYsImV4cCI6MjAwMzc5ODU3Nn0.7qlGxxWD5ra74zZx5lgtj02xPTzhMSznOVEQi_SCCQk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;