import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import './Establishments.css';
import  {useTranslation} from 'react-i18next'


export default function Establishments() {
    const [showForm, setShowForm] = useState(false);
    const [newName, setNewName] = useState('');
    const [newSubDomain, setNewSubdomain] = useState('');
    const [time, setTime] = useState([]);
    const [establishments, setEstablishments] = useState([]);
    const [search, setSearch] = useState('');  
    const {t} = useTranslation();
    useEffect(() => {
        supabase.from('establishments').select('*'). then(({data, error}) => {
            if (error) {
                console.log('Ошибка:', error)
                return
            }
            if (data) setEstablishments(data)
        })
    }, [])

    const handleAdd = async () => {
        await supabase.from('establishments').insert({
            name: newName,
            subdomain: newSubDomain
        })
        

        const { data } = await supabase.from('establishments').select('*')
        setEstablishments(data)

        setShowForm(false)
    }

    return (
        <div>
            <div className='header'>
            <h1>{t('establishments_title')}</h1>
            <button onClick={() => setShowForm(true)}>+ {t('add_establishments')}</button>
            </div>
            {showForm && (
                <div className='modal'>
                    <input 
                    placeholder='Имя заведения' 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                     placeholder='Поддомен' 
                    value={newSubDomain}
                    onChange={(e) => setNewSubdomain(e.target.value)}
                    />
                    <input
                    placeholder='Время'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    
                    />
                    <button onClick={handleAdd}>Сохранить</button>
                    <button onClick={() => setShowForm(false)}>Отмена</button>
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
                    <th>Logo</th>
                    <th>Ady</th>
                    <th>Domen</th>
                    <th>Status</th>
                    <th>Gutaryan wagty</th>
                    </tr>
                </thead>
                <tbody>
                   {establishments.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                   .map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.subdomain}</td>
                        <td>{item.end_date}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
} 