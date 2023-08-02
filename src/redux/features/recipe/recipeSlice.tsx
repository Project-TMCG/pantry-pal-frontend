import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    all: {},
    lastCall: {}
  },
  reducers: {
    addRecipes: (state, action: PayloadAction<Object>) => {
      //Get API Call From Action Payload
      const payload = action.payload;

      //Add new recipes to all
      state.all = {...state.all, ...payload}

      //Replace lastCall
      state.lastCall = payload
    },
  },
});

export const {
  addRecipes,
} = recipeSlice.actions;

export default recipeSlice.reducer;