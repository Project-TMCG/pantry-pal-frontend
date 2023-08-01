//Import Dependencies
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SearchBar } from '@rneui/base';

//Declare and Import Types
interface Props {
  placeholderText: string
}

const RecipeSearch: React.FC<Props> = ({ placeholderText }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.input}>
      <SearchBar
        placeholder={placeholderText}
        onChangeText={newText => setText(newText)}
        value={text}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 150,
  },
});

export default RecipeSearch;