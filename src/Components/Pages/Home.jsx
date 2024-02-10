import React, { useContext } from 'react'
import {GlobalContext} from "../Context"
import Recipeitem from '../Recipeitem'

const Home = () => {

  const {searchParam,setSearchParam,handleSubmit,recipeList,loading}=useContext(GlobalContext)
  
  
  if(loading) return<h1>Loading Please wait!</h1>;
  return (
   <>
   <div className='inputcontainer'>
    <div>
    <form onSubmit={handleSubmit} >
    <input type="text"
    name='search'
    value={searchParam}
    onChange={(e)=>setSearchParam(e.target.value)}
     />
     <button className='btn'>Search</button>
    </form>
    </div>

   </div>
   <div>
    {
      recipeList && recipeList.length?(
        <div className='grid'>
         {
           recipeList.map((item)=>(
            <Recipeitem key={item.id} item={item}/>
            ))
         }
        </div>
      ):(<div className='emptylist'>Nothing to show</div>)
    }
   </div>
   </>
  )
}

export default Home