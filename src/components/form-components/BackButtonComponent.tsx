import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { RootStackParams } from "../../../App";

const { width } = Dimensions.get("window");

const BackButton = () => {
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        navigator.pop();
      }}
    >
      <Icon name="arrow-back" color={"black"} size={25} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    marginRight: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width,
  },
  headerText: {
    fontSize: 30,
  },
});
