import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface savedIndex {
  "Dish Type": string | undefined;
  "Equipment": string | undefined;
  "Calories": string | undefined;
  "Protein (g)": string | undefined;
  "Fat (g)": string | undefined;
  "Fiber (g)": string | undefined;
  "Carbs (g)": string | undefined;
  "Cholesterol (mg)": string | undefined;
  "Reviews": string | undefined;
}

interface optionValue {
  "Dish Type": string | undefined;
  "Equipment": string | undefined;
  "Calories": string | undefined;
  "Protein (g)": string | undefined;
  "Fat (g)": string | undefined;
  "Fiber (g)": string | undefined;
  "Carbs (g)": string | undefined;
  "Cholesterol (mg)": string | undefined;
  "Reviews": string | undefined;
}

interface filterData {
  savedIndex: savedIndex,
  optionValues: optionValue
}

interface indexPayload {
  payload: savedIndex;
}

interface valuePayload {
  payload: optionValue;
}

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState: {
    savedIndex:{
      "Dish Type": undefined,
      "Equipment": undefined,
      "Calories": undefined,
      "Protein (g)": undefined,
      "Fat (g)": undefined,
      "Fiber (g)": undefined,
      "Carbs (g)": undefined,
      "Cholesterol (mg)": undefined,
      "Reviews": undefined,
    } as savedIndex,
    optionValues: {
      "Dish Type": undefined,
      "Equipment": undefined,
      "Calories": undefined,
      "Protein (g)": undefined,
      "Fat (g)": undefined,
      "Fiber (g)": undefined,
      "Carbs (g)": undefined,
      "Cholesterol (mg)": undefined,
      "Reviews": undefined,
    } as optionValue
  } as filterData,
  reducers: {
    saveIndex: (state, action: indexPayload) => {
      //Get saved indexes on ModalFilterCategories.tsx from payload object
      const payload: savedIndex = action.payload;

      //Add new recipes to all
      state.savedIndex["Dish Type"] = payload["Dish Type"];
      state.savedIndex["Equipment"] = payload["Equipment"];
      state.savedIndex["Calories"] = payload["Calories"];
      state.savedIndex["Protein (g)"] = payload["Protein (g)"];
      state.savedIndex["Fat (g)"] = payload["Fat (g)"];
      state.savedIndex["Fiber (g)"] = payload["Fiber (g)"];
      state.savedIndex["Carbs (g)"] = payload["Carbs (g)"];
      state.savedIndex["Cholesterol (mg)"] = payload["Cholesterol (mg)"];
      state.savedIndex["Reviews"] = payload["Reviews"];

      console.log("This is what savedIndex looks like after an update:")
      console.log(state.savedIndex)
    },
    saveValue: (state, action: valuePayload) => {
      //Get the option value that is selected on ModalFilterCategories.tsx from payload object
      const payload: optionValue = action.payload;

      //Add new recipes to all
      state.optionValues["Dish Type"] = payload["Dish Type"];
      state.optionValues["Equipment"] = payload["Equipment"];
      state.optionValues["Calories"] = payload["Calories"];
      state.optionValues["Protein (g)"] = payload["Protein (g)"];
      state.optionValues["Fat (g)"] = payload["Fat (g)"];
      state.optionValues["Fiber (g)"] = payload["Fiber (g)"];
      state.optionValues["Carbs (g)"] = payload["Carbs (g)"];
      state.optionValues["Cholesterol (mg)"] = payload["Cholesterol (mg)"];
      state.optionValues["Reviews"] = payload["Reviews"];

      console.log("This is what optionValues looks like after an update:")
      console.log(state.optionValues)
    }
  },
});

export const { saveIndex, saveValue } = filterDataSlice.actions;

export default filterDataSlice.reducer;
