import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Analytics() {
    const [analytics, setAnalytics] = useState([]);
    useEffect(() => {
        supabase.from('analytics_events').select('*').then(({data, error}) => {
            if(error) {
                console.log('Ошибка')
                return
            } 
            if(data) setAnalytics(data)
        })
    }, [])

    return (
        <div>
            <h1>Статистика</h1>
            
        </div>
    )
}