//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

//Import screen components
import RecipeCard from "../components/form-components/RecipeCard";
import TextField from "../components/form-components/TextField";
import FilterButtonGroup from "../components/form-components/FilterButtonGroup";
import FilterOverlayButton from "../components/form-components/FiltersOverlayButton";

//Types for React Navigation
import { RootStackParams } from "../../App";
import { useSelector } from "react-redux";

//____Mock Data to later be deleted and replaced with API data____
type Recipe = {
  title: string;
  cuisine: string;
  image: string;
};

const Results: React.FC = () => {
  const recipeObject = useSelector((state: any) => state.recipe.all);
  const recipes = Object.keys(recipeObject).map((key) => {
    return recipeObject[key];
  });
  const allCuisines = Array.from(
    new Set(recipes.reduce((acc, recipe) => [...acc, ...recipe.cuisines], []))
  ) as string[];

  const options: string[] = ["All", ...allCuisines];

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // Hooks
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  // This function handles the cuisine filter option button selection
  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.cuisines.includes(filter)
      );
      setFilteredRecipes(filtered);
    }
  };

  // This function handles the search entries of the search bar
  const handleSearchbarEntry = (text: string) => {
    const recipeSearched = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );

    if (recipeSearched) {
      setFilteredRecipes(recipeSearched);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TextField
          placeholderText="Search Recipe"
          onSearchEntry={handleSearchbarEntry}
        />
        <FilterOverlayButton />
      </View>
      <FilterButtonGroup
        options={options}
        onFilterSelect={handleFilterSelect}
      />
      <RecipeCard
        recipes={filteredRecipes.map((recipe) => recipe.title)}
        images={filteredRecipes.map((recipe) => recipe.image)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
  },
});

export default Results;
