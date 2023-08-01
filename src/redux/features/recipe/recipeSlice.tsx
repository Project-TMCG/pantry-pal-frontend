import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    all: "test",
    lastCall: {fart: "yum"}
  },
  reducers: {
    addRecipes: (state, action: PayloadAction<any>) => {
      //Get API Call From Action Payload
      const payload = action.payload;

      // //Add new recipes to all
      // state.all = {...state.all, ...payload}

      // //Replace lastCall
      // state.lastCall = payload
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value

export const {
  addRecipes,
} = recipeSlice.actions;

export default recipeSlice.reducer;