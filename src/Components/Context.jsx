import { createContext } from "react";
import {useState} from "react"

export const GlobalContext=createContext(null);

function GlobalState({children}){
const [searchParam,setSearchParam]=useState("");
const [loading,setLoading]=useState(false);
const [recipeList,setRecipeList]=useState([]);
const [recipeDetailsData,setRecipeDetailsdata]=useState(null);
const [favoritesList,setFavoritesList]=useState([]);

async function handleSubmit(e){
    e.preventDefault();
    try {
        setLoading(true);
        let res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
        let data=await res.json();
        // console.log(data.data.recipes);
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam("");
        
    } catch (error) {
        // throw new error(error);
        console.log(error);
        setLoading(false);
        setSearchParam("");
    }
}

function handleAddProduct(getitem){
    // console.log(getitem);
    let copycontent=[...favoritesList];
    let index=copycontent.findIndex((item)=>item.id===getitem.id);
    if(index===-1)
    {
        copycontent.push(getitem);
    }
    else 
   {
    copycontent.splice(index);
   }
    
    setFavoritesList(copycontent);

}


    return(
        <GlobalContext.Provider
        value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailsData,
        setRecipeDetailsdata,
        favoritesList,
        handleAddProduct,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;