import React, { useState } from 'react'; //rafc
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp   = () => {

    const [categories,setCategories]=useState(['One Punch']);
    //Ctrl+K y Ctrl-C comentar en bloque
    const handleAdd = () => {
    //     //no asi: categories.push('Hunter X Hunter');
    //     //setCategories([...categories,"Hunter X Hunter"]);
    //     setCategories( cast => (["Huntes X.. Hunter",...cast]))
    //     console.log(categories);
     }
       
    return (
        <>
           <h2>GifExpertApp...</h2> 
           <AddCategory setCategories1={setCategories}/>
           <hr/>
          <button onClick={handleAdd}>Agregar</button>
        <ol>
            {
                categories.map(category => (
                   // {return <li key={category}>{category}</li>}
                    <GifGrid
                    key={category}
                    category={category}
                    />
                ))
                
            }
        </ol>
        </>
    )
}
