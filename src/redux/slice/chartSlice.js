import {createSlice} from "@reduxjs/toolkit";

export const chartSlice=createSlice({
    name:'chart',
    initialState:{
        data:[],
        
    },
    reducers:{
        updateChartData:(state,action)=>{
            state.data=action.payload;
        },
        
      
    },
});

export const {updateChartData}=chartSlice.actions;
export default chartSlice.reducer;
