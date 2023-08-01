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

//Types for React Navigation
import { RootStackParams } from "../../App";

//____Mock Data to later be deleted and replaced with API data____
type Recipe = {
  name: string;
  cuisine: string;
};

const recipes: Recipe[] = [
  {name: "hamburger", cuisine: "American"}, 
  {name: "pizza", cuisine: "Italian"}, 
  {name: "empanadas", cuisine: "Bolivian"},
  {name: "buffalo wings", cuisine: "American"},
  {name: "tacos", cuisine: "Mexican"},
  {name: "quesadilla", cuisine: "Mexican"},
  {name: "pasta", cuisine: "Italian"},
  {name: "saltenas", cuisine: "Bolivian"},
  {name: "sushi", cuisine: "Japanese"},
  {name: "ramen", cuisine: "Japanese"},
  {name: "lo mein", cuisine: "Chinese"},
  {name: "pho", cuisine: "Chinese"},
]
//Filter button options
// Function that condenses all the cuisine filter options with the Set removing duplicates
const options = ["All", ... new Set(recipes.map((recipe) => recipe.cuisine))]
//_____End of Mock Data____

const Results: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // Hooks
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  // This function handles the cuisine filter option button selection
  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) => recipe.cuisine === filter);
      setFilteredRecipes(filtered);
    }
  };

  // This function handles the search entries of the search bar
  const handleSearchbarEntry = (text: string) => {

    const recipeSearched = recipes.find((recipe) => recipe.name.toLowerCase() == text.toLowerCase());

    if(recipeSearched) {
      setFilteredRecipes([recipeSearched]);
    }
    else {
      const filtered = recipes.filter((recipe) => recipe.cuisine === text);
      setFilteredRecipes(filtered)
    }
  }


  return (
    <View style={styles.container}>
      <TextField placeholderText="Search Recipe" onSearchEntry={handleSearchbarEntry}/>
      <FilterButtonGroup options={options} onFilterSelect={handleFilterSelect}/>
      <RecipeCard recipes={filteredRecipes.map(recipe => recipe.name)} />
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
