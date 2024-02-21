import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context'
import Recipeitem from '../Recipeitem';

const Favorites = () => {
const {favoritesList,handleAddProduct}=useContext(GlobalContext);


  return (
    
    <>
    <div>
    {
      favoritesList && favoritesList.length >0?(
        favoritesList.map((item)=>{
          return(
           <>
            <div className='favoriteitems'>
            <Recipeitem item={item}/>
            <button className='btn1 btn3'onClick={()=>handleAddProduct(item)}>
            
              Remove from favorites
                
                </button>
            </div>
           </>
          )
        }
       
        
        
        )
      ):(<div><h2>Nothing to Show in Favorites</h2></div>)
    }
    </div>
    </>
  )
}

export default Favorites