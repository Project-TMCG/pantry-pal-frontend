import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    all: {},
    lastCall: {},
    activeRecipe: "",
  },
  reducers: {
    addRecipes: (state, action: PayloadAction<Object>) => {
      //Get API Call From Action Payload
      const payload = action.payload;

      //Add new recipes to all
      state.all = { ...payload };
      //Replace lastCall
      state.lastCall = payload;
    },
    chooseRecipe: (state, action: PayloadAction<string>) => {
      const payload = action.payload;

      state.activeRecipe = payload;
    },
  },
});

export const { addRecipes, chooseRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
