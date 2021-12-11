import React from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


 const  GifGrid = ({category})=> {

   
  const { data:images,loading} = useFetchGifs(category); //haciedo uso del hook importado
  console.log(images)
  
      
    return (
        <>
         <h3>{ category}</h3>
       {loading && <p>Cargando...</p>}
       {/*console.log(data)*/}
            <div className="card-grid">
            { 
                images.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                        ))
                }          
           </div> 
        
           </> 
    )
    
}
export default GifGrid