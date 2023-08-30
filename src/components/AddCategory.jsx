import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = ({ target }) =>{
        // console.log(target.value);
        setInputValue( target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); //Sirve para evitar que se realice un refresh del navegador
        // console.log(inputValue);
        if( inputValue.trim().length <= 1) return; //Para que no se guarde campo vacio, el trim sirve para eliminar los espacios adelante y atras

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue(''); //Para que limpie el input al momento de dar enter.
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
