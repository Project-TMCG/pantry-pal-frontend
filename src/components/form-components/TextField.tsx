//Import Dependencies
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

//Declare and Import Types
interface Props {
  placeholderText: string
}

const TextField: React.FC<Props> = ({ placeholderText }) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholderText}
      onChangeText={newText => setText(newText)}
      value={text}
      clearButtonMode="always"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextField;