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
import { useSelector, useDispatch } from "react-redux";
import { faT } from "@fortawesome/free-solid-svg-icons";
import { clearAll } from "../redux/features/filterData/filterDataSlice";

//____Mock Data to later be deleted and replaced with API data____
type Recipe = {
  title: string;
  cuisine: string;
  image: string;
  aggregateLikes: number;
  nutrition: {};
};

const Results: React.FC = () => {
  const dispatch = useDispatch();
  const rating = useSelector((state: any) => state.detail.rating);
  const recipeObject = useSelector((state: any) => state.recipe.all);
  const filterData = useSelector((state: any) => state.filterData);
  const recipes = Object.keys(recipeObject).map((key) => {
    return recipeObject[key];
  });

  const stars = recipes.map((recipe) => {
    const likes = recipe.aggregateLikes;
    if (likes > 20) {
      return "★★★★★";
    } else if (likes > 10 && likes < 20) {
      return "★★★★";
    } else if (likes > 5 && likes < 10) {
      return "★★★";
    } else if (likes > 0 && likes < 5) {
      return "★★";
    } else return "★";
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
  const [starArr, setStars] = useState<string[]>(stars);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [filterTest, passTest] = useState<boolean>(false);

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
  };

  //This function applies modal filters to the recipes

  const applyModalFilters = () => {
    let filtered: any[] | ((prevState: Recipe[]) => Recipe[]) = [];
    let newStarsArr = [];

    let calorieSelection = filterData.optionValues.Calories
      ? parseInt(filterData.optionValues.Calories.slice(0, 3))
      : 0;
    let dishTypeSelection = filterData.optionValues["Dish Type"];
    let proteinSelection = filterData.optionValues["Protein (g)"]
      ? parseInt(filterData.optionValues["Protein (g)"].slice(0, 2))
      : 500;

    let fatSelection = filterData.optionValues["Fat (g)"]
      ? parseInt(filterData.optionValues["Fat (g)"].slice(0, 3))
      : 0;

    let fiberSelection = filterData.optionValues["Fiber (g)"]
      ? parseInt(filterData.optionValues["Fiber (g)"].slice(0, 2))
      : 500;

    let carbSelection = filterData.optionValues["Carbs (g)"]
      ? parseInt(filterData.optionValues["Carbs (g)"].slice(0, 3))
      : 0;
    let cholestSelection = filterData.optionValues["Cholesterol (mg)"]
      ? parseInt(filterData.optionValues["Cholesterol (mg)"].slice(0, 3))
      : 0;
    let reviewSelection = filterData.optionValues.Reviews;
    let equipmentSelection = filterData.optionValues.Equipment;

    for (let i = 0; i < recipes.length; i++) {
      let passedFilters = false;
      let equipmentData = recipes[i].instructionSteps;
      //calorie conditional

      if (calorieSelection > recipes[i].nutrition.Calories.amount) {
        passedFilters = true;
      } else if (filterData.optionValues.Calories) {
        continue;
      }

      // Protein Conditional
      if (proteinSelection < recipes[i].nutrition.Protein.amount) {
        passedFilters = true;
      } else if (filterData.optionValues["Protein (g)"]) {
        continue;
      }

      // //Fat conditional

      if (fatSelection > recipes[i].nutrition.Fat.amount) {
        passedFilters = true;
      } else if (filterData.optionValues["Fat (g)"]) {
        continue;
      }

      //Fiber conditional

      if (fiberSelection < recipes[i].nutrition.Fiber.amount) {
        passedFilters = true;
      } else if (filterData.optionValues["Fiber (g)"]) {
        continue;
      }

      // Carbs conditional
      if (carbSelection > recipes[i].nutrition.Carbohydrates.amount) {
        passedFilters = true;
      } else if (filterData.optionValues["Carbs (g)"]) {
        continue;
      }

      // Cholesterol  conditional
      if (cholestSelection > recipes[i].nutrition.Cholesterol.amount) {
        passedFilters = true;
      } else if (filterData.optionValues["Cholesterol (mg)"]) {
        continue;
      }

      //rating conditional

      if (reviewSelection === stars[i]) {
        passedFilters = true;
      } else if (filterData.optionValues.Reviews) {
        continue;
      }

      console.log(reviewSelection);

      // dish type conditional
      if (recipes[i].dishTypes.includes(dishTypeSelection)) {
        passedFilters = true;
      } else if (filterData.optionValues["Dish Type"]) {
        continue;
      }

      // equipment conditional
      for (let j = 1; j < Object.keys(equipmentData).length + 1; j++) {
        if (equipmentData[j].equipment.includes(equipmentSelection)) {
          passedFilters = true;
        }
      }

      if (passedFilters) {
        //pushes recipe to temp array if all tests pass
        newStarsArr.push(stars[i]);
        filtered.push(recipes[i]);
      } else continue;
    }

    //changes state of shown recipes

    // setTimeout(() => {
    setFilteredRecipes(filtered);
    setStars(newStarsArr);
    handleModalVisible();
    // }, 600);
  };

  const clearAllFilters = () => {
    setFilteredRecipes(recipes);
    dispatch(clearAll());
    handleModalVisible();
  };

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
        <Modal transparent={true} visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.otherModalContainer}>
              <View style={styles.modalTopRow}>
                <Pressable
                  style={styles.modalOptionButtons}
                  onPress={() => clearAllFilters()}
                >
                  <Text style={styles.modalTopButtonText}>Clear All</Text>
                </Pressable>
                <Pressable
                  style={styles.modalOptionButtons}
                  onPress={() => applyModalFilters()}
                >
                  <Text style={styles.modalTopButtonText}>Apply Filters</Text>
                </Pressable>
              </View>
              <ModalFilterCategories />
              <Button
                title="Close Modal"
                onPress={() => handleModalVisible()}
              ></Button>
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
        rating={starArr}
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
    flexDirection: "row",
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
    width: "80%",
  },
  modalOptionButtons: {
    borderRadius: 14,
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 4,
    backgroundColor: "#72927C",
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
    color: "#FFFCF7",
  },
});

export default Results;
