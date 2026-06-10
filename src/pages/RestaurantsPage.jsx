import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; 
import { useNavigate } from 'react-router-dom';

export default function RestaurantsPage() {
    const [restaurantPage, setRestaurantPage] = useState([]);
    const navigate = useNavigate();


    return (
        <div>
            <div className='header'>
            <h1>Kategoriyalar</h1>
            <button onClick={() => navigate(-1)}> - </button>
            </div>
            
            <div className='grid'>
                {restaurantPage.map((item) => (
                    <div key={item.id} className='card'>
                        <div className='card-emage'>
                            {item.logo_url && <img src={item.logo_url} alt={itemm.name} />} 
                            </div>
                            {item.name}
                            </div>
                ))}
            </div>


        </div>
    );

}