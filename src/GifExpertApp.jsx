import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) =>{
        // console.log(newCategory);
        // categories.push('Valorant'); no es recomendado ocupar el push en react, ya que existen varias formas de poder hacerlo
        if ( categories.includes(newCategory) ) return; //Para validar si ya se encuentra el texto en el arrgelo, pero si esta igual. En caso de que sea con minuscula lo tomara igual(buscar la manera de que no pase eso en JS)
        setCategories([ newCategory,...categories]); //Esta es la primera manera de poder cargar una nueva categoria
        // setCategories( cat => [ ...cat, 'Valorant']); //Esta manera tambien funciona pero la primera es la recomendada
    }

  return (
    <>  

        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory = { onAddCategory }
        />

        {
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
            ))
        }


    </>
  )
}
