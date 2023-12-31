//Import Dependencies
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// Search bar width
const barWidth = (2 / 3) * Dimensions.get("screen").width;

//Declare and Import Types
interface Props {
  placeholderText: string;
  onSearchEntry: (newText: string) => void;
}

const TextField: React.FC<Props> = ({ placeholderText, onSearchEntry }) => {
  const [text, setText] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const handleTextChange = (text: string) => {
    setText(text);
    onSearchEntry(text);
    setShowIcon(text !== "");
  };

  const handleClear = () => {
    setText("");
    onSearchEntry("");
    setShowIcon(false);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Icon name="search" size={15} />
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        onChangeText={handleTextChange}
        value={text}
        clearButtonMode="always"
      />
      <Icon style={styles.icon} name={showIcon ? "clear" : ""} onPress={handleClear} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: barWidth * 0.95,
  },
  icon: {
    marginRight: 5,
  },
  searchBarContainer: {
    flexDirection: "row",
    borderColor: "#F5D2C2",
    height: 40,
    width: 280,
    borderWidth: 2,
    borderRadius: 34,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 6,
  },
});

export default TextField;
