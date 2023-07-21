import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectorSlice = createSlice({
  name: "selector",
  initialState: {
    produce: {} as Record<string, number>, // Specify the type for produce
    meat: {} as Record<string, number>,
    dairy: {} as Record<string, number>,
    baking: {} as Record<string, number>,
    diet: {} as Record<string, number>,
    extras: {} as Record<string, number>,
  },
  reducers: {
    addProduce: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.produce[payload] = 1;
    },
    addMeat: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.meat[payload] = 1;
    },
    addDairy: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.dairy[payload] = 1;
    },
    addExtras: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.extras[payload] = 1;
    },
    addBaking: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.baking[payload] = 1;
    },
    addDiet: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      state.diet[payload] = 1;
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
