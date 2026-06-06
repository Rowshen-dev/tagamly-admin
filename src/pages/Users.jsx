import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useTranslation } from "react-i18next";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [newUsers, setNewUsers] = useState('');
    const [search, setSearch] = useState('');
    const {t} = useTranslation();
    useEffect(() => {
        supabase.from('users').select('*').then(({data, error}) => {
            if(error) {
                console.log('Ошибка')
                return
            }
            if(data) setUsers(data)
        })
    }, [])
    const handleAdd = async () => {
        await supabase.from('users').insert({
            username: newUsers
        })
        const {data} = await supabase.from('users').select('*')
        setUsers(data)
        setShowUsers(false)
    }
    return (
        <div>
            <div className="header">
        <h1>{t('users_title')}</h1>
        <button onClick={() => setShowUsers(true)}>+ {t('add_users')}</button>
        </div>
        {showUsers && (
            <div className="modal">
                <input
                placeholder='Пользователь'
                value={newUsers}
                onChange={(e) => setNewUsers(e.target.value)}
                />
                <button onClick={handleAdd}>Сохранить</button>
                <button onClick={() => setShowUsers(false)}>Отмена</button>
                </div>
        )}
          <div className='search'>
            <input 
            placeholder='Поиск...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            </div>
        <table>
            
                <thead>
                    <tr>
                        <th>
                            Имя пользователя
                        </th>
                        <th>
                            Заведение
                        </th>
                        <th>
                            Статус
                        </th>
                    </tr>
                </thead>
                <tbody>
                {users.filter(item => item.username.toLowerCase().includes(search.toLowerCase()))
                .map((item) => (
                    <tr key={item.id}>
                        <td>
                            {item.username}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}