//Import Dependencies
import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from "react-redux";
import { addRecipes } from "./../../redux/features/recipe/recipeSlice";

//Declare and Import Types
interface Props {}

const Counter: React.FC<Props> = ({}) => {
  const count = useSelector((state: any) => console.log(state));
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Update Recipes" onPress={() => dispatch(addRecipes({}))} />
      {/* <Button title="Subtract One" onPress={() => dispatch(decrement())} /> */}
      <Text>{`this is the last call to recipes: ${count}`}</Text>
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
