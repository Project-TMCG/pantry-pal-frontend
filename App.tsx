//Import Dependencies
import * as React from "react";
import { useState, useEffect } from "react";

//Import React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

//Import Containers
import Landing from "./src/containers/Landing";
import Search from "./src/containers/Search";
import Results from "./src/containers/Results";
import Details from "./src/containers/Details";
import { configureStore } from "@reduxjs/toolkit";
import Loading from "./src/containers/Loading";
import IngredientCard from "./src/components/form-components/IngredientCard";

//TypeScripts React Navigation Types
export type RootStackParams = {
  Landing: undefined;
  Search: undefined;
  Results: undefined;
  Details: undefined;
  Loading: undefined;
};

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
          <RootStack.Screen name="Loading" component={Loading} />
          <RootStack.Screen name="Results" component={Results} />
          <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
