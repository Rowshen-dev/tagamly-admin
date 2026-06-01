import { useState, useEffect} from 'react';
import { supabase } from '../lib/supabase';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(false);
    const [newOrders, setNewOrders] = useState('');

    useEffect (() => {
        supabase.from('orders').select('*').then(({data, error}) => {
            if(error) {
                console.lof('Ошибка')
                return
            }
            if(data) setOrders(data)
        })
    }, [])
    const handleAdd = async () => {
        await supabase.from('orders').insert({
            name: newOrders
        })
        const {data} = await supabase.from('orders').select('*')
        setOrders(data)
        setShowOrders(false)

    }
    return (
        <div>
            <div className='header'>
                <h1>Заказы</h1>
            </div>
        </div>
    )
}