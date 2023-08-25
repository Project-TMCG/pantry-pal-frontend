//Import Dependencies
import * as React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../App";

import getRecipes from "../services/axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addRecipes } from "../redux/features/recipe/recipeSlice";

const Loading: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const state = useSelector((state: any) => state.selector);
  const diet = useSelector((state: any) => state.selector.diet);

  const dispatch = useDispatch();

  const parseData = async () => {
    let sumArr = [];
    let sumString = "";
    const dietArr = Object.keys(diet);
    let dietString = dietArr.toString();
    for (const key in state) {
      let tempArr = Object.keys(state[key]);

      if (key !== "diet" && key !== "totalIngredients" && tempArr.length) {
        sumArr.push(tempArr.toString());
      }
    }

    sumString = sumArr.toString();
    console.log({
      includeIngredients: sumString,
      diet: dietString,
      number: 10,
    });
    const recipes = await getRecipes({
      includeIngredients: sumString,
      diet: dietString,
      number: 10,
    });

    if (!recipes) {
      alert("no results found");
      navigation.pop();
    } else {
      dispatch(addRecipes(recipes));
      navigation.navigate("Results");
    }
  };

  useEffect(() => {
    parseData();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>"Hold on tight" Loading Results</Text>
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

export default Loading;
