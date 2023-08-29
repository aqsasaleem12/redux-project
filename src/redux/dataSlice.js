const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
increment:0,
decrement:0
};

const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {
        setIncrement: (state, action) => {
            state.increment = action.payload;
          },
          setDecrement:(state,action)=>{
            state.decrement=action.payload
          },
    },
  });
  export const {
    setIncrement,
    setDecrement,
   
  
  } = dataSlice.actions;
  export default dataSlice.reducer;
  