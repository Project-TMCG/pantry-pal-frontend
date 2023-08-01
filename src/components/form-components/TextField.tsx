//Import Dependencies
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// Search bar width
const barWidth = 2 / 3 * Dimensions.get('screen').width

//Declare and Import Types
interface Props {
  placeholderText: string
  onSearchEntry: (newText: string) => void
}

const TextField: React.FC<Props> = ({ placeholderText, onSearchEntry }) => {
  const [text, setText] = useState('');
  const [showIcon, setShowIcon] = useState(false);

  const handleTextChange = (text: string) => {
    setText(text);
    onSearchEntry(text);
    setShowIcon(text !== '')
  }

  const handleClear = () => {
    setText('');
    onSearchEntry('');
    setShowIcon(false)
  }

  return (
    <View style={styles.searchBarContainer}>
      <Icon name='search' size={15} />
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        onChangeText={handleTextChange}
        value={text}
        clearButtonMode='always'
      />
      <Icon 
      name={showIcon ? "clear" : ""} 
      onPress={handleClear} 
      />
      <AntDesignIcon name="filter" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: barWidth,
  },
  searchBarContainer: {
    flexDirection: "row",
    borderColor: '#ccc',
    height: 40,
    width: 280,
    borderWidth: 1,
    borderRadius: 34,
    padding: 10,
    marginVertical: 4,
  }
});

export default TextField;