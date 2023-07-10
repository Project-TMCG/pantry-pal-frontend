//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ButtonGroup } from "react-native-elements";

//Import Dependencies
import TextField from "../components/form-components/TextField";
import IngredientCard from "../components/form-components/IngredientCard";

//Types for React Navigation
import { RootStackParams } from "./../../App";

const Search: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);

  //Dummy Test Ingredient Data
  const ingredients = ["Lettuce", "Spinach", "Carrots"];

  return (
    <>
      <View style={styles.container}>
        <Text>Search Page</Text>
        <ButtonGroup
          buttonStyle={{ width: 100 }}
          buttons={["No Restriction", "Pescatarian", "Vegetarian", "Vegan"]}
          onPress={(selectedIdx) => setSelectedIndex(selectedIdx)}
          selectedIndex={selectedIndex}
          selectedIndexes={selectedIndexes}
        />
        <IngredientCard ingredients={ingredients} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
