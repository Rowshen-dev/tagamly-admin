import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function EstablishmentsMenu() {
  const [category, setCategory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDish, setNewDish] = useState('');
  const [showDishForm, setShowDishForm] = useState(null);
  const [newDishPrice, setDishPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


  const { id } = useParams();

  const handleAdd = async () => {
    await supabase.from('categories')
    .insert({
      name: newName,
      establishment_id: id
       })
       const { data } = await supabase.from('categories').select('*').eq('establishment_id', id)
       setCategory(data)
       setShowForm(false)
      }
  
      const handleAddDish = async () => {
        await supabase.from('products')
        .insert({
          name: newDish,
          category_id: selectedCategory, 
          price: newDishPrice,

        })
        const {data} = await supabase.from('products').select('*')
        setNewDish(data)
        setShowDishForm(false)
      }
  

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
    <div>Заведения: </div>
    <div className="addCategory">
    <button onClick={() => setShowForm(true)}>+ Добавить категорию</button>
    </div>
    {showForm && (
      <div className="modal">
        <input
        placeholder="Название категории"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleAdd}>Сохранить</button>
        <button onClick={() => setShowForm(false)}>Отмена</button>
    </div>
    )}
    {category.map((item) => (
      <div className="category-card"key={item.id}>
        <td>{item.name}</td>
          <div className="addDish">
      <button onClick={() => setShowDishForm(item.id)}>+ Добавить блюдо</button>
    </div>
    {showDishForm === item.id && (
      <div className="mealModal">
       <input
       placeholder="Название блюда"
       value={newDish}
       onChange={(e) => setNewDish(e.target.value)}
       />
       <button onClick={handleAddDish}>Сохранить</button>
       <button onClick={() => setShowDishForm(false)}>Отмена</button>
       </div> 
    )}
      </div>
    ))}
    </div>
  )
}