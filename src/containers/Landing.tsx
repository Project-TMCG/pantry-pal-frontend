//Import Dependencies
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "react-native-elements";

//Types for React Navigation
import { RootStackParams } from "./../../App";

//Import Components
import Counter from "./../components/redux-test-components/counter";
import { height } from "@fortawesome/free-solid-svg-icons/faBasketShopping";

const Landing: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={require('../assets/logo.png')} style={{height:100, width:100}}/>
      <Text style={styles.appName}>PANTRYPAL</Text>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.introText}>Discover delicious recipes tailored to the ingredients in your kitchen and unleash your culinary creativity.</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.startedButtonText}>Get Started</Text>
      </TouchableOpacity>
      {/* <Counter /> */}
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
  getStartedButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 10,
  },
  startedButtonText: {
    color: "#FFFCF7",
  },
  welcomeText: {
    fontSize: 24,
  },
  introText: {
    fontSize: 12,
    margin: 10,
  },
  appName: {
    fontSize: 32,
  }
});

export default Landing;
