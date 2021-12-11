import React,{useState} from 'react';
import propTypes from 'prop-types';

//NO asi: export const AddCategory = (props) => {, si no destructurar
//setCategories tiene que ser el mismo nombre que se envia como argumento
//definido com setState en GifExpertAoo.js
export const AddCategory = ({setCategories2}) => {
    const [inputValue,setInputValue]=useState('');
    const handleInputChange=(e)=>{
          setInputValue(e.target.value);
    
    }
    const handleSubmit=(e)=>{
          e.preventDefault(); // para evitar el reposteo
        if (inputValue.trim().length > 2){
          setCategories2( cats => [inputValue,...cats])
          setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
         </form>
    )
}
//fin funcion principal

// validando a que envie argumento
AddCategory.propTypes={
    setCategories: propTypes.func.isRequired
}