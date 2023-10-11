import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import { setFavorites } from "./redux/slice";
import {deleteFavorite, getfavorites, postFavorites}from './redux/getfavorites'

export function HomePage (){
  const [data, setData]=useState([])  
  const favorites = useSelector((state)=>state.favorites.favorites)

  const dispatch = useDispatch()
  const addFavorites = (product) => {
    dispatch(postFavorites(product))
    dispatch(setFavorites({ ...favorites, [product.id]: true }));
    dispatch(getfavorites())
  }
 
  const removeFavorites = (productId) => {
    dispatch(deleteFavorite(productId))
    dispatch(setFavorites({ ...favorites, [productId]: !favorites[productId] }));
    
  };
    const getProducts = async () => {
        try {
            const response = await fetch(
              "http://localhost:3000/products"
            );
            const jsonData=await response.json()
            setData(jsonData)
            
          } catch (error) {
            console.log(error);
          } 
      };
      useEffect(() => {
        getProducts();
      }, []); 
    return( 
        <div>
            <nav>
                <Link to="/favorites">Favorites</Link>
            </nav>
        <ul>
          {data.map((product) => (
           <li key={product.id}>
           {product.name}
           {favorites[product.id] ? (
             <button onClick={() =>   removeFavorites(product.id)}>
               Delete Favori
             </button>
           ) : (
             <button onClick={() => addFavorites(product)}>Add Favori</button>
           )}
         </li>
          ))}
        </ul>
      </div>
    )
}