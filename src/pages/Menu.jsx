import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import './Menu.css';


export default function Menu() {
    const [menu, setMenu] = useState([]);
   useEffect(() => {
        supabase.from('establishments').select('*'). then(({data, error}) => {
            if (error) {
                console.log('Ошибка:', error)
                return
            }
            if (data) setMenu(data)
        })
    }, [])
    return (
        <div>
            <h1>Рестораны</h1>
            <div className="grid">
           {menu.map((item) => (
    <div key={item.id} className="card">
        {item.name}
    </div>
))}
        </div>
        </div>
    )
}