import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteFavorite } from "./redux/getfavorites"


export function Favoriters (){
    const favorites = useSelector((state)=>state.favorites.favorites)
  const dispatch = useDispatch()
    const handleDeleteFavorit = (id)=>{
      dispatch(deleteFavorite(id))
    }
    return <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
         <ul>
          {favorites.map((favorit) => (
            <li key={favorit.id}>{favorit.name}<button onClick={()=>handleDeleteFavorit(favorit.id)}>DeleteFavorites</button></li>
          ))}
        </ul>
    </div>
}