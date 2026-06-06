import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from 'react-i18next';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');
    const {t} = useTranslation();
    useEffect(() => {
        supabase.from('orders').select('*').order('created_at', { ascending: false })
        .then(({ data, error }) => {
            if (error) { console.log(error); return; }
            if (data) setOrders(data);
        });
    }, []);

    const filtered = statusFilter === 'all' 
        ? orders 
        : orders.filter(o => o.status === statusFilter);

    return (
        <div>
            <div className="header">
                <h1>{t('orders_title')}</h1>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="all">Все статусы</option>
                    <option value="pending">Ожидает</option>
                    <option value="preparing">Готовится</option>
                    <option value="on_the_way">В пути</option>
                    <option value="ready">Готов к выдаче</option>
                    <option value="completed">Завершён</option>
                    <option value="cancelled">Отменён</option>
                </select>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Дата</th>
                        <th>Заведение</th>
                        <th>Телефон клиента</th>
                        <th>Контактный телефон</th>
                        <th>Способ</th>
                        <th>Итого</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((order, index) => (
                        <tr key={order.id}>
                            <td>#{index + 1}</td>
                            <td>{new Date(order.created_at).toLocaleString('ru-RU')}</td>
                            <td>{order.establishment_id || '—'}</td>
                            <td>{order.customer_phone || '—'}</td>
                            <td>{order.contact_phone || '—'}</td>
                            <td>{order.method === 'pickup' ? 'Самовывоз' : 'Доставка'}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}