import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { GlobalContext } from '../Context'

const Details = () => {
  const { recipeDetailsData, setRecipeDetailsdata ,handleAddProduct,favoritesList} = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getDetailsData() {
      let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      let data = await res.json();
      // console.log(data.data.recipe);
      setRecipeDetailsdata(data?.data?.recipe);
    }
    getDetailsData();
  },[])

  return (
    <>
       <h1 className='headingofdetail'>Details Page</h1>
      <div className='detailsdata'>
        
        <div>
          <img src={recipeDetailsData?.image_url} alt="food" />
          <h2>{recipeDetailsData?.publisher}</h2>
          <p>{recipeDetailsData?.title}</p>

        </div>

     
      <div>
        <h2>Ingridents</h2>
        <div>
          {

            recipeDetailsData?.ingredients?.map((ingredient) =>
            (
              <>
                <ul >

                  <li key={ingredient.id}><span>{ingredient.description}</span>
                    <span>{ingredient.quantity}:{ingredient.unit}</span></li>
                </ul>
              </>
            ))

          }
        </div>
        <div>
          <button className='btn1'onClick={()=>handleAddProduct(recipeDetailsData)}>
            
               {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                (item) => item.id === recipeDetailsData?.id
              ) !==-1
                ? "Remove from favorites"
                : "Add to favorites"}
              
            
          </button>
        </div>

      </div>
      </div>

    </>
  )
}

export default Details