import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width

const ActiceRecipeName = () => {
  const activeName = useSelector((state: any) => state.recipe.activeRecipe);
  return (
    <View>
      <Text style={styles.headerText}>{activeName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "400",
    flexWrap: 'wrap',
    width: screenWidth * 0.75
  },
  headerBlock:{
    
  }
});

export default ActiceRecipeName;
