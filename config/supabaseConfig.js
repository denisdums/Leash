import AsyncStorage from '@react-native-async-storage/async-storage'
import {createClient} from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'



const supabaseConfig = {
    supabaseUrl: 'https://fhsifckezzvxtixqevtu.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoc2lmY2tlenp2eHRpeHFldnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0OTgxMTgsImV4cCI6MTk5MzA3NDExOH0.fvYTcJGmwRH7F7cThmVaIi0GD1TiNdmM65lJfYK-f78',
}

const supabase = createClient(
    supabaseConfig.supabaseUrl,
    supabaseConfig.supabaseKey,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
            storage: AsyncStorage,
        },
    }
);

export default supabase