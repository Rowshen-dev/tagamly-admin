import {useState, useEffect} from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from 'react-i18next';


export default function Translations() {
    const [translations, setTranslations] = useState([]);
    const [showTranslate, setShowTranslate] = useState(false);
    const [newKey, setNewKey] = useState('');
    const [newRu, setNewRu] = useState('');
    const [newTk, setNewTk] = useState('');
    const {t} = useTranslation();

    const handleAdd = async () => {
        await supabase.from('translations').insert({
            key: newKey,
            ru: newRu,
            tk: newTk,

        })
        const {data} = await supabase.from('translations').select('*')
        setTranslations(data)
        setShowTranslate(false)
    }

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
            <h1>{t('translations_title')}</h1>
            <button onClick={() => setShowTranslate(true)}>+ Добавить перевод</button>
            </div>
            {showTranslate && (
                <div className='modal'>
                    <input
                    placeholder='Ключ'
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    />
                    <input
                    placeholder='Русский'
                    value={newRu}
                    onChange={(e) => setNewRu(e.target.value)}
                    />
                    <input
                    placeholder='Туркменский'
                    value={newTk}
                    onChange={(e) => setNewTk(e.target.value)}
                    />
                    <button onClick={handleAdd}>Сохранить</button>
                    <button onClick={() => setShowTranslate(false)}>Отмена</button>
                    </div>
            )}
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