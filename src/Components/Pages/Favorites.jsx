import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import Recipeitem from '../Recipeitem';

const Favorites = () => {
const {favoritesList}=useContext(GlobalContext);

  return (
    
    <>
    <div>
    {
      favoritesList && favoritesList.length >0?(
        favoritesList.map((item)=>
        <Recipeitem item={item}/>)
      ):(<div><h2>Nothing to Show in Favorites</h2></div>)
    }
    </div>
    </>
  )
}

export default Favorites