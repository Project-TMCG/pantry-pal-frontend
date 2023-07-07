import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

import selectorReducer from "./features/selector/selectorSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    selector: selectorReducer,
  },
});
