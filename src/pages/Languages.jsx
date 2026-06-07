import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import './Languages.css'
import { useTranslation } from "react-i18next";


export default function Languages() {
    const [languages, setLanguages] = useState([]);
    const [showLanguages, setShowLanguages] = useState(false);
    const [newLanguages, setNewLanguages] = useState('');
    const {t} = useTranslation();
        useEffect(() => {
            supabase.from('languages').select('*').then(({data, error}) => {
                if(error) {
                    console.log('Ошибка')
                    return
                } 
                if(data) setLanguages(data)
            }) 
        }, [])

        const handleAdd = async () => {
            await supabase.from('languages').insert({
                name: newLanguages,
            })
             const {data} = await supabase.from('languages').select('*')
    setLanguages(data)
    setShowLanguages(false)
        }

    return (
        <div>
            <div className="header">
            <h1>{t('languages_title')}</h1>
            <button onClick={() => setShowLanguages(true)}>+ {t('add_language')}</button>
            </div>
            {showLanguages && (
                <div className="modal">
            <input 
            placeholder='Язык'
            value={newLanguages}
            onChange={(e) => setNewLanguages(e.target.value)}
            />
            <button onClick={handleAdd}>Сохранить</button>
            <button onClick={() => setShowLanguages(false)}>Отмена</button>
            </div>
            )}
            <table>
                <tbody>
                        {languages.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}