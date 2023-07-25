//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

//Import screen components
import RecipeCard from "../components/form-components/RecipeCard";
import TextField from "../components/form-components/TextField";

//Types for React Navigation
import { RootStackParams } from "../../App";
import FilterButtonGroup from "../components/form-components/FilterButtonGroup";

//____Mock Data to later be deleted and replaced with API data
type Recipe = {
  name: string;
  cuisine: string;
};

const recipes: Recipe[] = [
  { name: "hamburger", cuisine: "American" },
  { name: "pizza", cuisine: "Italian" },
  { name: "empanadas", cuisine: "Bolivian" },
];
//Filter button options
const options = ["All", ...recipes.map((recipe) => recipe.cuisine)];
//End of Mock Data____

const Results: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) => recipe.cuisine === filter);
      setFilteredRecipes(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Results Page</Text>
      <TextField placeholderText="Enter Recipe" />
      <FilterButtonGroup
        options={options}
        onFilterSelect={handleFilterSelect}
      />
      <RecipeCard recipes={filteredRecipes.map((recipe) => recipe.name)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Results;
