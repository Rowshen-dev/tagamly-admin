import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './RestaurantsPage.css';

export default function RestaurantsPage() {
    const [restaurantPage, setRestaurantPage] = useState(null);
    const navigate = useNavigate();
    const { subdomain } = useParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

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
    }, [restaurantPage]);


    useEffect(() => {
        if(categories.length === 0) return
        const categoryIds = categories.map(c => c.id)
        supabase.from('products')
        .select('*')
        .in('category_id', categoryIds)
        .then(({data}) => {
            if(data) setProducts(data)
        })
    }, [categories]);


    return (
    <div>
        <div className='header'>
            <h1>{restaurantPage?.name}</h1>
            <div className='category-btn'>
            <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        </div>
        
        {categories.map((item) => (
            <button
            key={item.id} 
        className={`category-btn ${activeCategory === item.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(item.id)}
            >
            {item.name}
        </button>
        ))}
        
        
       {products
       .filter(p => p.category_id === activeCategory)
       .map((item) => (
        <div key={item.id}>{item.name}</div>
       ))
       }
       
    </div>
)

}