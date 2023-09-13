import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface filterData {
  "Dish Type": string,
  "Equipment": string,
  "Calories": string,
  "Protein (g)": string,
  "Fat (g)": string,
  "Fiber (g)": string,
  "Carbs (g)": string,
  "Cholesterol (mg)": string,
  "Reviews": string,
}

interface actionPayload {
  payload: filterData
}

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState: {
    "Dish Type": "Test Data",
    "Equipment": "",
    "Calories": "",
    "Protein (g)": "",
    "Fat (g)": "",
    "Fiber (g)": "",
    "Carbs (g)": "",
    "Cholesterol (mg)": "",
    "Reviews": "",
  },
  reducers: {
    setNewData: (state, action: actionPayload) => {
      //Get New searchData Object from Payload
      const payload: filterData = action.payload;

      //Add new recipes to all
      state["Dish Type"] = payload["Dish Type"]
      state["Equipment"] = payload["Equipment"]
      state["Calories"] = payload["Calories"]
      state["Protein (g)"] = payload["Protein (g)"]
      state["Fat (g)"] = payload["Fat (g)"]
      state["Fiber (g)"] = payload["Fiber (g)"]
      state["Carbs (g)"] = payload["Carbs (g)"]
      state["Cholesterol (mg)"] = payload["Cholesterol (mg)"]
      state["Reviews"] = payload["Reviews"]
    },
  },
});

export const { setNewData } = filterDataSlice.actions;

export default filterDataSlice.reducer;