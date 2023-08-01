import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getRecipes from "../../../services/axios";
export const recipeSlice = createSlice({
  name: "recipeData",
  initialState: {
    recipes: {} as any,
    selectedRecipe: {} as Record<string, number>,
  },
  reducers: {
    saveRecipes: (state, action: PayloadAction<{}>) => {
      state.recipes = action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value

export const { saveRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
