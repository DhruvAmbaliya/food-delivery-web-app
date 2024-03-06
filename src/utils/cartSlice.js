import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        
    },
    reducers:{
        addItem:(state,action)=>{
            //state - hold previouse state value
            state.items.push(action.payload)
           // return
           // not return anything
           // its take a state and directly modify it
        },
        removeItem:(state,action)=>{
            state.items.pop();       
        },
        clearCart:(state)=>{
            state.items= [];
        },

    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;