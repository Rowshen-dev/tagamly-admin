import {useState, useEffect} from 'react';
import { supabase } from '../lib/supabase';


export default function Translations() {
    const [translations, setTranslations] = useState([]);
    const [showtranslate, setShowTranslate] = useState(false);

    useEffect(() => {
        supabase.from('translations').select('*').then(({data, error}) => {
            if(error) {
                console.log('Ошибка')
                return
            }
            if(data) setTranslations(data)
        })
    }, [])

    return (
        <div>
            <div className='header'>
            <h1>Переводы</h1>
            <button onClick={() => setShowTranslate(true)}>+ Добавить перевод</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Ключ
                        </th>
                        <th>
                            Русский
                        </th>
                        <th>
                            Turkmen
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {translations.map((item) => (
                        <tr key={item.id}>
                           <td>{item.key}</td>
                           <td>{item.ru}</td>
                           <td>{item.tk}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 