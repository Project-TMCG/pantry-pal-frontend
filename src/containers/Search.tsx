//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, ButtonGroup } from "react-native-elements";

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
  const [currentTopic, setCurrentTopic] = React.useState(0);
  //Dummy Test Ingredient Data
  const ingredients = ["Lettuce", "Spinach", "Carrots"];
  const categories: string[] = ["Produce", "Meat & Seafood", "Dairy"];
  const handleNext = () => {
    setCurrentTopic(currentTopic + 1);
    console.log(currentTopic);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>{categories[currentTopic]}</Text>
        <Button
          title={"->"}
          onPress={() => {
            handleNext();
          }}
        />
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
