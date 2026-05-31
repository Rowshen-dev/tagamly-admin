import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";


export default function Payments() {
    const [payments, setPayments] = useState([]);
     useEffect(() => {
        supabase.from('payments').select('*, establishments(name)').then(({data, error}) => {
            if(error){
                console.log('Ошибка:', error)
                return
            } 
            if (data) setPayments(data) 
        })
     }, [])
    return (
        <div>
        <div>
            <h1>Tolegler</h1>
        </div>
        <table>
            <thead>
                <tr>
                <th>Заведение</th>
                <th>Статус</th>
                <th>Дата выдачи</th>
                <th>Сумма подписки</th>
                <th>Пользователь</th>
                </tr>
            </thead>
            <tbody>
        {payments.map((item) => (
            <tr key={item.id}>
               <td>{item.establishments?.name}</td>  
                <td>{item.qr_issued}</td>        
                <td>{item.qr_date}</td>          
                <td>{item.amount}</td>           
                <td>{item.user_name}</td>         
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    )
}