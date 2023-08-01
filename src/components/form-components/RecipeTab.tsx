import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import {
  FlatList,
  // FlatList,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

// import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { fakeRecipe } from "../../services/recipes/fakeRecipe";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const TabNavigator = () => {
  const leftTab = useSelector((state: any) => state.detail.value);

  const ingredientList = fakeRecipe["Vegetarian Falafels"].ingredients;
  const instructions = Object.values(
    fakeRecipe["Vegetarian Falafels"].instructionSteps
  );
  type ItemProps = { step: string; stepNumber: number };
  type IngredientProps = { step: string };
  const Item = ({ step, stepNumber }: ItemProps) => (
    <View style={styles.item}>
      <Text style={{ fontWeight: "700" }}> Step {stepNumber}:</Text>
      <Text style={styles.listText}> {step}</Text>
    </View>
  );

  const Ingredient = ({ step }: IngredientProps) => (
    <View style={styles.item}>
      <Text style={styles.listText}> {step}</Text>
    </View>
  );

  if (leftTab) {
    return (
      <GestureHandlerRootView style={styles.ingredientContainer}>
        <FlatList
          data={Object.values(ingredientList)}
          renderItem={({ item }) => <Ingredient step={item.original} />}
        />
      </GestureHandlerRootView>
    );
  } else
    return (
      <GestureHandlerRootView style={styles.ingredientContainer}>
        <FlatList
          data={instructions}
          renderItem={({ item }) => (
            <Item stepNumber={item.number} step={item.step} />
          )}
          keyExtractor={(item) => item.number.toString()}
        />
      </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    width: width * 0.9,
  },

  listText: {
    fontSize: 16,
    fontWeight: "400",
  },
  ingredientContainer: {
    flex: 2,
    height: height,
    // width: width * 0.9,
    marginTop: 0,
    // alignItems: "center",
    // alignContent: "flex-start",
    backgroundColor: "#72927C",
    // justifyContent: "flex-start",
  },
});
export default TabNavigator;
