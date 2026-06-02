import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [newUsers, setNewUsers] = useState('');
    const [search, setSearch] = useState('');
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
        <h1>Пользователи</h1>
        <button onClick={() => setShowUsers(true)}>+ Добавить пользователя</button>
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
            <tbody>
                {users.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
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