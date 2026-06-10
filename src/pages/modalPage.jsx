import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function ModalPage() {
    const [modalPage, setModalPage] = useState([]);
    const [ShowModalPage, setShowModalPage] = useState('');
    const {t, i18n} = useTranslation();
     const [newKey, setNewKey] = useState('');
    const [newRu, setNewRu] = useState('');
    const [newTk, setNewTk] = useState('');

   const handleAdd = async () => {
    await supabase.from('translations').insert({
        key: newKey,
        ru: newRu,
        tk: newTk,
    })
    const {data} = await supabase.from('translations').select('*')
    setModalPage(data)
    setShowModalPage(false)
   }
   
     useEffect(() => {
        supabase.from('translations').select('*').then(({data, error}) => {
            if(error) {
                console.log('Ошибка:', error)
                return
            }
            if(data) setModalPage(data)
        })
    }, [])

    return (
    <div className="grid">
        <div className="header-colums">
        <h1>Dil saylan</h1>
        </div>
    <div className="columns">
        <button onClick={() => i18n.changeLanguage('tk')}>Turkmen</button>
        <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
    </div>
)
}