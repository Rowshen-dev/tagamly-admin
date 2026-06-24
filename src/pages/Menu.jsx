import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import './Menu.css';
import { Link } from 'react-router-dom';


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
            <div className="navbar">
    <span style={{color: '#F97316', fontWeight: 'bold', fontSize: '20px'}}>Tagamly</span>
    <button>For Partners</button>
</div>
            <h1>Restoranlar</h1>
            <div className="grid">
           {menu.map((item) => (
            <Link to={`/menu/${item.subdomain}`} key={item.id} className="a">
    <div className="card">
       <div className="card-image">
        {item.logo_url && <img src={item.logo_url} alt={item.name} />}
        </div> 
       {item.name}
    </div>
    </Link>
))}
        </div>
        <Link to="/menu/:subdomain">Menu</Link>
        </div>
    )
}