//Import Dependencies
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Import Dependencies
import TextField from '../components/form-components/TextField'

//Types for React Navigation
import { RootStackParams } from '../App';

const Search: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  
  return (
    <View style={styles.container}>
      <Text>Search Page</Text>
      <TextField placeholderText='Enter Ingredients!'/>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;