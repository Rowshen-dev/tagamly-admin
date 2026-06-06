import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from 'react-i18next';

export default function Regions() {
    const [regions, setRegions] = useState([]);
    const [showRegions, setShowRegions] = useState(false);
    const [newRegions, setNewRegions] = useState('')
    const {t} = useTranslation();
    useEffect(() => {
        supabase.from('regions').select('*').then(({data, error}) => {
            if(error) {
                console.log('Ошибка')
                return
            } 
            if(data) setRegions(data)
        })
    }, [])

    const handleAdd = async () => {
        await supabase.from('regions').insert ({
            name: newRegions
        })
        const {data} = await supabase.from('regions').select('*')
        setRegions(data)
        setShowRegions(false)
    }
    return (
        <div>
            <div className='header'>
        <h1>{t('regions_title')}</h1>
        <button onClick={() => setShowRegions(true)}>+ {t('add_regions')}</button>
        </div>
        {showRegions && (
            <div className='modal'>
                <input
                placeholder='Регион'
                value={newRegions}
                onChange={(e) => setNewRegions(e.target.value)}
                />
                <button onClick={handleAdd}>Сохранить</button>
                <button onClick={() => setShowRegions(false)}>Отмена</button>
            </div>
        )}
        <table>
            <tbody>
                {regions.map((item) => (
                    <tr key={item.id}>
                        <td>
                            {item.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}