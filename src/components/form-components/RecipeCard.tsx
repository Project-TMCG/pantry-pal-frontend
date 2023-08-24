import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduce } from "../../redux/features/selector/selectorSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { chooseRecipe } from "../../redux/features/recipe/recipeSlice";
import { setServingSize } from "../../redux/features/counter/counterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch";
import { inputRating } from "../../redux/features/details/detailSlice";
// Card Sizes that are being tested
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 2;
const CARD_HEIGHT = (height * 2.25 - CARD_MARGIN * 10) / 9;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;
const IMAGE_HEIGHT = CARD_HEIGHT * 0.85;

type CardsComponentsProps = {
  recipes: string[];
  images: string[];
  rating: number[];
};

const RecipeCard: React.FunctionComponent<CardsComponentsProps> = ({
  recipes,
  images,
  rating,
}) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const recipeObject = useSelector((state: any) => state.recipe.all);

  const stars = rating.map((likes) => {
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

  const selectRecipe = (recipeName: string, stars: string) => {
    const servingAmount = recipeObject[recipeName];
    dispatch(chooseRecipe(recipeName));
    dispatch(setServingSize(servingAmount.servings));
    dispatch(inputRating(stars));
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {recipes.map((recipe: string, index: number) => (
          <View key={index} style={styles.card}>
            <Pressable onPress={() => selectRecipe(recipe, stars[index])}>
              <View style={styles.imageShadow}>
                <Image
                  style={styles.image}
                  source={{
                    uri: images[index],
                  }}
                />
              </View>
              <Text numberOfLines={1} style={styles.title}>
                {recipe}
              </Text>
              <View style={styles.ratingBox}>
                <Text>{stars[index]}</Text>
                <Text>
                  <FontAwesomeIcon
                    icon={faStopwatch}
                    size={20}
                    color={"black"}
                  />
                  {recipeObject[recipe].readyInMinutes} min
                </Text>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CARD_MARGIN,
  },
  // Testing this styling for recipe cards, futher styling edits needed
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginTop: CARD_MARGIN,
    marginBottom: CARD_MARGIN,
    // textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 17,
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    borderRadius: 20,
  },
  imageShadow: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    borderRadius: 20,
    backgroundColor: "#000000",
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
  ratingBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RecipeCard;
