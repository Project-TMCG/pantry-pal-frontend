//Import Dependencies
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import Landing from './screens/Landing';
import Search from './screens/Search';
import Results from './screens/Results';
import Details from './screens/Details';

//TypeScripts React Navigation Types
export type RootStackParams = {
  Landing: undefined
  Search: undefined
  Results: undefined
  Details: undefined
}

//App Component
export default function App() {

  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Landing">
        <RootStack.Screen name="Landing" component={Landing} />
        <RootStack.Screen name="Search" component={Search} />
        <RootStack.Screen name="Results" component={Results} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
