//Import Dependencies
import * as React from "react";
import { useState, useEffect } from "react";
import ActiceRecipeName from "./src/components/form-components/ActiveRecipeName";
//Import React Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

//Import Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

//Import Containers
import Landing from "./src/containers/Landing";
import Search from "./src/containers/Search";
import Results from "./src/containers/Results";
import ModalScreen from "./src/components/form-components/Modal";
import Details from "./src/containers/Details";
import { configureStore } from "@reduxjs/toolkit";
import Loading from "./src/containers/Loading";
import IngredientCard from "./src/components/form-components/IngredientCard";
import { View } from "react-native";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-elements";
import BackButton from "./src/components/form-components/BackButtonComponent";
import { useSelector } from "react-redux";

//TypeScripts React Navigation Types
export type RootStackParams = {
  Landing: undefined;
  Search: undefined;
  Results: undefined;
  Details: undefined;
  Loading: undefined;
  Modal: undefined;
};
const { width } = Dimensions.get("window");
//App Component
export default function App() {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Landing">
          <RootStack.Screen name="Landing" component={Landing} />
          <RootStack.Screen
            name="Search"
            options={{
              headerShown: false,
              headerBackVisible: false,
            }}
            component={Search}
          />
          <RootStack.Screen
            name="Loading"
            component={Loading}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen name="Results" component={Results} />
          <RootStack.Screen
            name="Details"
            options={{
              headerBackVisible: false,
              headerTitle: "false",
              headerLeft: () => (
                <View style={styles.header}>
                  <BackButton />
                  <ActiceRecipeName />
                </View>
              ),
            }}
            component={Details}
          />
          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen
              name="Modal"
              component={ModalScreen}
              options={{
                headerShown: false,
                gestureDirection: "vertical",
              }}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width,
  },
});
