//Import Dependencies
import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from "react-redux";
import { addProduce } from "../../redux/features/selector/selectorSlice";

//Declare and Import Types
interface Props {}

const AddIngredient: React.FC<Props> = ({}) => {
  //Redux State Management
  const selected = useSelector((state: any) => state.selector.produce);
  const dispatch = useDispatch();
  //Mock Data to choose from
  const listOfIngredients: string[] = ["bok Choy ", " eggplant ", " brocolli"];
  //object that temporarily stores selected ingredients
  let ingredientsAdded: { [key: string]: number } = {};

  const addIngredient = (ingredient: string): void => {
    //deletes ingredient if found in object
    if (ingredientsAdded.hasOwnProperty(ingredient)) {
      delete ingredientsAdded[ingredient];
    } else {
      //adds ingredient to the object in the form of a key if not selected yet
      ingredientsAdded[ingredient] = 1;
    }
    console.log(ingredientsAdded);
  };

  const submitIngredients = (): void => {
    //converts object into an array of keys and sends it into redux(global state)
    const arrToObjects = Object.keys(ingredientsAdded);
    dispatch(addProduce(arrToObjects));
  };

  return (
    <View style={styles.container}>
      {listOfIngredients.map((one) => {
        return (
          <Button title={one} key={one} onPress={() => addIngredient(one)} />
        );
      })}
      <Button title="send to redux" onPress={() => submitIngredients()} />
      <Text>{selected}</Text>
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

export default AddIngredient;
