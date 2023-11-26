import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
todos:[{id: 1, Text:"Hello World"}]
}

export const todoSlice =createSlice({
    name:'tood',
    initialState,
    reducers:{

        addtodo: (state, action) => {},
        removetodo: () =>{},
        
    }
}) //1.43