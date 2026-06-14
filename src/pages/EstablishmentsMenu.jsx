import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function EstablishmentsMenu() {
  const [category, setCategory] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    supabase.from('categories')
    .select('*')
    .eq('establishment_id', id)
    .then(({data, error}) => {
      if(error) {
        console.log('Ошибка')
        return
      }
      if(data) setCategory(data)
    })
  }, []);


  return (
    <div>
    <h1>Меню заведения</h1>
    <div>Заведения: {id}</div>
    </div>
  )
}