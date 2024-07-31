import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    data:[],
}

const addTocard=createSlice({
    name:"addtocard",
    initialState,
    reducers:{
        updateCard:(state,action)=>{
            state.loading=true;
            state.data=action.payload; //action.payload adds new data 
        },

        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
    }
})
export const {updateCard,setLoading}=addTocard.actions;
export default addTocard.reducer;