import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

//Example Landing Screen
function Landing() {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
    </View>
  )
}

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Search" component={Landing} />
        <Stack.Screen name="Results" component={Landing} />
        <Stack.Screen name="Details" component={Landing} />
      </Stack.Navigator>

    </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
