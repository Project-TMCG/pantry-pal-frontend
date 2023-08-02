//Import Dependencies
import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from "react-redux";
import { addRecipes } from "./../../redux/features/recipe/recipeSlice";

//Import Axios API Call
import getRecipes from "./../../services/axios"

//Declare and Import Types
interface Props {}

const Counter: React.FC<Props> = ({}) => {
  const recentRecipeRetrieved = useSelector((state: any) => state.recipe.lastCall);
  const allRecipesRetrieved = useSelector((state: any) => state.recipe.all);

  const dispatch = useDispatch();
  
  console.log(recentRecipeRetrieved);
  console.log(allRecipesRetrieved);

  async function onButton(){
    const newRecipes = await getRecipes()
    dispatch(addRecipes(newRecipes))
  }

  return (
    <View style={styles.container}>
      <Button title="Update Recipes" onPress={onButton} />
      {/* <Button title="Subtract One" onPress={() => dispatch(decrement())} /> */}
      {/* <Text>{`this is the last call to recipes: ${recentRecipeRetrieved}`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Counter;
