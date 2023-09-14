//Import Dependencies
import * as React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { faFireBurner } from "@fortawesome/free-solid-svg-icons/faFireBurner";
import { useDispatch } from "react-redux";
import { toggleTrue } from "../redux/features/details/detailSlice";
import { toggleFalse } from "../redux/features/details/detailSlice";
import RecipeTab from "../components/form-components/RecipeTab";
import { Image } from "react-native-elements";
import { fakeRecipe } from "../services/recipes/fakeRecipe";
import { useSelector } from "react-redux";
import {
  decreaseServings,
  increaseServings,
} from "../redux/features/counter/counterSlice";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

// const color = Dimensions.get();
const Details: React.FC = () => {
  const recipeObject = useSelector((state: any) => state.recipe.all);
  const servingSize = useSelector((state: any) => state.counter.servingSize);
  const activeRecipeName = useSelector(
    (state: any) => state.recipe.activeRecipe
  );
  const rating = useSelector((state: any) => state.detail.rating);

  const activeRecipe = recipeObject[activeRecipeName];
  const dispatch = useDispatch();

  const [rightTab, setRightTab] = React.useState({
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
  });
  const [leftTab, setLeftTab] = React.useState({
    backgroundColor: "#72927C",
    borderTopLeftRadius: 20,
  });
  const [tabTitle, setTitle] = React.useState("Ingredients");
  const handleTrue = () => {
    dispatch(toggleTrue());
    setRightTab({ backgroundColor: "#fff", borderTopRightRadius: 20 });
    setLeftTab({ backgroundColor: "#72927C", borderTopLeftRadius: 20 });
    setTitle("Ingredients");
  };

  const handleFalse = () => {
    dispatch(toggleFalse());
    setRightTab({ backgroundColor: "#72927C", borderTopRightRadius: 20 });
    setLeftTab({ backgroundColor: "#fff", borderTopLeftRadius: 20 });
    setTitle("Cooking Instructions");
  };

  // This function prevents the decrease servings button from going below zero servings
  const handleDecreaseServings = () => {
    if (servingSize > 0) {
      dispatch(decreaseServings());
    }
  };

  React.useEffect(() => {
    dispatch(toggleTrue());
    console.log(activeRecipe.nutrition.Calories.amount);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bioContainer}>
        <View>
          <Text>Total Time: {activeRecipe.readyInMinutes} Min</Text>
          <Text>
            Calories: {Math.ceil(activeRecipe.nutrition.Calories.amount)}
          </Text>
          <Text>{rating}</Text>
        </View>
        <Image
          alt="ingredient"
          style={{
            height: 150,
            width: 150,
            resizeMode: "cover",
            borderRadius: 10,
          }}
          source={{
            uri: activeRecipe.image,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, leftTab]}
          onPress={() => handleTrue()}
        >
          <FontAwesomeIcon icon={faBasketShopping} size={25} color={"black"} />
        </Pressable>
        <Pressable
          style={[styles.button, rightTab]}
          onPress={() => handleFalse()}
        >
          <FontAwesomeIcon icon={faFireBurner} size={25} color={"black"} />
        </Pressable>
      </View>
      <View style={styles.tabTitle}>
        <Text style={styles.tabText}>{tabTitle}</Text>
        <View style={styles.servingBox}>
          <Pressable onPress={handleDecreaseServings}>
            <Text>-</Text>
          </Pressable>
          <View style={styles.blackLine} />
          <Text style={{ paddingHorizontal: 10 }}>{servingSize}</Text>
          <View style={styles.blackLine} />
          <Pressable onPress={() => dispatch(increaseServings())}>
            <Text>
              + <View style={{ paddingRight: 5 }} />
              Servings
            </Text>
          </Pressable>
        </View>
      </View>
      <RecipeTab />
    </View>
  );
};
const styles = StyleSheet.create({
  bioContainer: {
    flexDirection: "row",
    width: width,
    justifyContent: "space-evenly",
    paddingTop: 60,
    alignItems: "center",
  },
  blackLine: {
    backgroundColor: "black",
    height: "100%",
    width: 1,
    marginHorizontal: 6,
  },
  button: {
    height: "100%",
    justifyContent: "center",
    width: "50%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: width,
    height: "8%",
    backgroundColor: "#72927C",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: "20%",
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tabTitle: {
    alignContent: "center",
    padding: 15,
    backgroundColor: "#72927C",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabText: {
    color: "white",
    fontWeight: "500",
    width: "50%",
    fontSize: 25,
  },
  ingredientContainer: {
    // flex: 2,
    // flexDirection: "column",
    height: height,

    alignItems: "center",
    justifyContent: "flex-start",
  },
  servingBox: {
    flexDirection: "row",
    justifyContent: "center",
    width: "45%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "3%",
    height: 40,
  },
});

export default Details;
