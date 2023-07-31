//Import Dependencies
import * as React from "react";
import {
  NavigationRouteContext,
  useNavigation,
} from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { faFireBurner } from "@fortawesome/free-solid-svg-icons/faFireBurner";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fakeRecipe } from "../services/recipes/fakeRecipe";

//Types for React Navigation
import { RootStackParams } from "./../../App";
import {
  FlatList,
  GestureHandlerRootView,
  NativeViewGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { toggleTrue } from "../redux/features/details/detailSlice";
import { toggleFalse } from "../redux/features/details/detailSlice";
import { useSelector } from "react-redux";
import RecipeTab from "../components/form-components/RecipeTab";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Icon, Image } from "react-native-elements";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

// const color = Dimensions.get();
const Details: React.FC = () => {
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

  React.useEffect(() => {
    dispatch(toggleTrue());
  }, []);

  return (
    <View style={styles.container}>
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
      </View>
      <RecipeTab />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height: "100%",
    justifyContent: "center",
    width: "50%",
    alignItems: "center",

    // borderTopRightRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "center", // Adjust the spacing between the buttons
    width: width,
    height: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: "#72927C",

    marginTop: "65%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tabTitle: {
    alignContent: "center",
    padding: 15,
  },
  tabText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
  ingredientContainer: {
    // flex: 2,
    // flexDirection: "column",
    height: height,

    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Details;
