import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import detailReducer from "./features/details/detailSlice";
import selectorReducer from "./features/selector/selectorSlice";
import recipeReducer from "./features/recipe/recipeSlice";
import filterReducer from "./features/filterData/filterDataSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    selector: selectorReducer,
    detail: detailReducer,
    recipe: recipeReducer,
    filterData: filterReducer
  },
});
