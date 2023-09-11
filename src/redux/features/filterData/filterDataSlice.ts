import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface filterData {
  Dish_Type: string,
  Equipment: string,
  Calories: string,
  Protein: string,
  Fat: string,
  Fiber: string,
  Carbs: string,
  Cholesterol: string,
  Reviews: string,
}

interface actionPayload {
  payload: filterData
}

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState: {
    Dish_Type: "Test Data",
    Equipment: "",
    Calories: "",
    Protein: "",
    Fat: "",
    Fiber: "",
    Carbs: "",
    Cholesterol: "",
    Reviews: "",
  },
  reducers: {
    setNewData: (state, action: actionPayload) => {
      //Get New searchData Object from Payload
      const payload: filterData = action.payload;

      //Add new recipes to all
      state.Dish_Type = payload.Dish_Type
      state.Equipment = payload.Equipment
      state.Calories = payload.Calories
      state.Protein = payload.Protein
      state.Fat = payload.Fat
      state.Fiber = payload.Fiber
      state.Carbs = payload.Carbs
      state.Cholesterol = payload.Cholesterol
      state.Reviews = payload.Reviews
    },
  },
});

export const { setNewData } = filterDataSlice.actions;

export default filterDataSlice.reducer;