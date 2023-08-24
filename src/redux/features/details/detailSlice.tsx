import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    value: true,
    rating: "",
  },
  reducers: {
    toggleTrue: (state) => {
      state.value = true;
    },
    toggleFalse: (state) => {
      state.value = false;
    },
    inputRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value

export const { toggleTrue, toggleFalse, inputRating } = detailSlice.actions;

export default detailSlice.reducer;
