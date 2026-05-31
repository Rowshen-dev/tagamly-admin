import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gorfmrkiazhjtfceydfs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvcmZtcmtpYXpoanRmY2V5ZGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzU1MTIsImV4cCI6MjA5NTExMTUxMn0.1JLTdG2CeQ2VSHo2vQSR4sRffOdVpxrLp7dao20KntQ'

export const supabase = createClient(supabaseUrl, supabaseKey)