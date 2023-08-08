import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IngredientInfo {
  number: number,
  image: string | undefined
}

export const selectorSlice = createSlice({
  name: "selector",
  initialState: {
    produce: {} as Record<string, IngredientInfo>, // Specify the type for produce
    meat: {} as Record<string, IngredientInfo>,
    dairy: {} as Record<string, IngredientInfo>,
    baking: {} as Record<string, IngredientInfo>,
    diet: {} as Record<string, IngredientInfo>,
    extras: {} as Record<string, IngredientInfo>,
  },
  reducers: {
    addProduce: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.produce[payload]['number'] = 1;
    },
    addMeat: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.meat[payload]['number'] = 1;
    },
    addDairy: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.dairy[payload]['number'] = 1;
    },
    addExtras: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.extras[payload]['number'] = 1;
    },
    addBaking: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.baking[payload]['number'] = 1;
    },
    addDiet: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.diet[payload]['number'] = 1;
    },
    deleteProduce: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.produce[payload];
    },
    deleteMeat: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.meat[payload];
    },
    deleteDairy: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.dairy[payload];
    },
    deleteExtras: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.extras[payload];
    },
    deleteDiet: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.diet[payload];
    },
    deleteBaking: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      delete state.baking[payload];
    },
  },
});

export const {
  addProduce,
  addMeat,
  addDairy,
  addExtras,
  addBaking,
  addDiet,
  deleteProduce,
  deleteDairy,
  deleteMeat,
  deleteExtras,
  deleteBaking,
  deleteDiet,
} = selectorSlice.actions;

export default selectorSlice.reducer;
