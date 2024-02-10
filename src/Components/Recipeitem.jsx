import React from 'react'
import {NavLink} from 'react-router-dom'

const Recipeitem = ({item}) => {
  return (
    <>
    <div className='recipedetails'>
      <img src={item.image_url}/>
      <h2>{item.publisher}</h2>
      <p>{item.title}</p>
     <div>
     <NavLink to={`/details/${item.id}`}>
     <button className='btn1'>Recipe Details</button>
     </NavLink>
     {/* <button className='btn1'>Add to Favorites</button> */}
     </div>
    </div>
    </>
  )
}

export default Recipeitem