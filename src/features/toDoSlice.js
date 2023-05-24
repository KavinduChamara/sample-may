import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  toDos: [],
  error: "",
  selected: {},
};

export const fetchItems = createAsyncThunk("item/fetchItems", () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos`, 
    {
      headers: {},
    })
      .then((res) => {
        return res.data; 
      }
    )
});

export const getItem = createAsyncThunk("item/getItem", (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      headers: {},
    })
      .then((res) => {
        return res.data;
      }
    )
});
  
const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  extraReducers: (builder) => {
    
    //Fetch items
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.toDos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //Fetch items
    builder.addCase(getItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.loading = false;
      state.selected = action.payload;
      state.error = "";
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
  
//reducer
export default toDoSlice.reducer;

