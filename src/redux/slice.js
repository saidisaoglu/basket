import { createSlice } from '@reduxjs/toolkit'
import { deleteFavorite, getfavorites,postFavorites } from './getfavorites'

const initialState = {
    loading:false,
    favorites:[],
    error:null
}

  const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      setFavorites:(state,action)=>{
        state.favorites=action.payload
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(getfavorites.pending,(state)=>{
        state.loading=true;
        state.favorites=[];
        state.error=null;
      }),
      builder.addCase(getfavorites.rejected, (state,action)=>{
        state.loading=false;
        state.favorites=[];
        state.error=action.payload;
      }),
      builder.addCase(getfavorites.fulfilled, (state,action)=>{
        state.loading=false;
        state.favorites=action.payload;
        state.error=null;
      }),
      builder.addCase(postFavorites.pending,(state)=>{
        state.loading=true;
        state.favorites=[];
        state.error=null;
      }),
      builder.addCase(postFavorites.rejected, (state,action)=>{
        state.loading=false;
        state.favorites=[];
        state.error=action.payload;
      }),
      builder.addCase(postFavorites.fulfilled, (state,action)=>{
        state.loading=false;
        state.favorites=action.payload;
        state.error=null;
      })
      builder.addCase(deleteFavorite.fulfilled,(state,action)=>{
        state.favorites=state.favorites.filter((favorite)=>favorite.id !== action.payload);
      })
      
    },
  })
  export const {setFavorites}=favoritesSlice.actions
  export default favoritesSlice.reducer;