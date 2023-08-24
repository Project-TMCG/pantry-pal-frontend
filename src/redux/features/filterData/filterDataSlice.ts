import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface searchData {
    ingredients: string[],
    diet: string[],
    cuisine: string[],
    equipment: string[],
    type: string[],
    maxReadyTime: string[]
}

interface actionPayload {
    payload: searchData
}

export const filterDataSlice = createSlice({
  name: "searchData",
  initialState: {
    ingredients: [""],
    diet: [""],
    cuisine: [""],
    equipment: [""],
    type: [""],
    maxReadyTime: [""],
  },
  reducers: {
    setNewSearch: (state, action: actionPayload) => {
      //Get New searchData Object from Payload
      const payload: searchData = action.payload;

      //Add new recipes to all
      state.ingredients = payload.ingredients
      state.diet = payload.diet
      state.cuisine = payload.cuisine
      state.equipment = payload.equipment
      state.type = payload.type
      state.maxReadyTime = payload.maxReadyTime
    },
  },
});

export const { setNewSearch } = filterDataSlice.actions;

export default filterDataSlice.reducer;