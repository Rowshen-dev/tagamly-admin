import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function RestaurantsPage() {
    const [restaurantPage, setRestaurantPage] = useState(null);
    const navigate = useNavigate();
    const { subdomain } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        supabase.from('establishments')
        .select('*')
        .eq('subdomain', subdomain)
        .single()
        .then(({data}) => {
            if(data) setRestaurantPage(data)
        })
    }, []);

    useEffect(() => {
        if(!restaurantPage) return
        supabase.from('categories')
        .select('*')
        .eq('establishment_id', restaurantPage.id)
        .then(({data: cats}) => {
            if(cats) setCategories(cats)
        })
    }, [restaurantPage])


    return (
    <div>
        <div className='header'>
            <h1>{restaurantPage?.name}</h1>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
        {categories.map((item) => (
            <tr key={item.id}>
                <td>{item.name}</td>
            </tr>
        ))}
    </div>
)

}