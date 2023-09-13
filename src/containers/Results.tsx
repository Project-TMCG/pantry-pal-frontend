//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

//Import screen components
import RecipeCard from "../components/form-components/RecipeCard";
import TextField from "../components/form-components/TextField";
import FilterButtonGroup from "../components/form-components/FilterButtonGroup";
import FilterOverlayButton from "../components/form-components/FiltersOverlayButton";
import ModalFilterCategories from "../components/form-components/ModalFilterCategories";

//Types for React Navigation
import { RootStackParams } from "../../App";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";

//____Mock Data to later be deleted and replaced with API data____
type Recipe = {
  title: string;
  cuisine: string;
  image: string;
  aggregateLikes: number;
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
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

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

  // This function handles the visibility of the modal
  const handleModalVisible = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Search Bar */}
        <TextField
          placeholderText="Search Recipe"
          onSearchEntry={handleSearchbarEntry}
        />
        {/* Filters Modal */}
        <Pressable onPress={() => handleModalVisible()}>
          <FilterOverlayButton />
        </Pressable>
        <Modal
          transparent={true}
          visible={isModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.otherModalContainer}>
              <View style={styles.modalTopRow}>
                <Pressable style={styles.modalOptionButtons}>
                  <Text style={styles.modalTopButtonText}>Clear All</Text>
                </Pressable>
                <Pressable style={styles.modalOptionButtons} onPress={() => handleModalVisible()}>
                  <Text style={styles.modalTopButtonText}>Apply Filters</Text>
                </Pressable>
              </View>
              <ModalFilterCategories />
              <Button title="Close Modal" onPress={() => handleModalVisible()}></Button>
            </View>
          </View>
        </Modal>
      </View>
      {/* Horizontal Sliding Cuisine Filter Options */}
      <FilterButtonGroup
        options={options}
        onFilterSelect={handleFilterSelect}
      />
      {/* Recipe Cards */}
      <RecipeCard
        recipes={filteredRecipes.map((recipe) => recipe.title)}
        images={filteredRecipes.map((recipe) => recipe.image)}
        rating={filteredRecipes.map((recipe) => recipe.aggregateLikes)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topRow: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000000aa",
  },
  otherModalContainer: {
    backgroundColor: "#fff",
    margin: 40,
    padding: 40,
    borderRadius: 20,
    width: '80%',
  },
  modalOptionButtons: {
    borderRadius: 14,
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 4,
    backgroundColor: '#72927C',
    // Shadow styling
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  modalTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTopButtonText: {
    fontSize: 12,
    color: '#FFFCF7',
  },
});

export default Results;
