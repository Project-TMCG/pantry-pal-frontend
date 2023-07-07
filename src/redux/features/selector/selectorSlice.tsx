import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectorSlice = createSlice({
  name: "selector",
  initialState: {
    produce: [] as string[], // Specify the type for produce
  },
  reducers: {
    addProduce: (state, action: PayloadAction<string[]>) => {
      const payload = action.payload;
      state.produce = payload;
    },
  },
});

export const { addProduce } = selectorSlice.actions;

export default selectorSlice.reducer;
