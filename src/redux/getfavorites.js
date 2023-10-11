import { createAsyncThunk } from "@reduxjs/toolkit";

export const getfavorites = createAsyncThunk(
  'favorites/getfavorites',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3000/favorites"
      );
      const data = await response.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 export const postFavorites = createAsyncThunk(

  'postFavorites/postFavorites',
  async (payload, {rejectWithValue})=>{
    try {
      const response = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });      
      const data = await response.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
 )
 export const deleteFavorite = createAsyncThunk(

  'deleteFavorite/getdeleteFavorite',
  async (payload, {rejectWithValue})=>{
    try {
      const response = await fetch(`http://localhost:3000/favorites/${payload}`, {
        method: "DELETE",
      });
      getfavorites();
      return payload;
    } catch (error) {
      return rejectWithValue(error.message)
    } 
  }
 )