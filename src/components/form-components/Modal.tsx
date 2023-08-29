import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import {
  addExtras,
  deleteExtras,
} from "../../redux/features/selector/selectorSlice";
import { withBadge, Icon } from "react-native-elements";
import { SearchStackParams } from "../../containers/Search";
import { RootStackParams } from "../../../App";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 3;
const CARD_HEIGHT = (height - CARD_MARGIN * 9) / 8;

const ModalScreen: React.FC = () => {
  //redux data
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const extraData = useSelector((state: any) => state.selector.extras);

  //variables
  const [text, onChangeText] = useState("");
  const extraArr = Object.keys(extraData);
  const BadgedIcon = withBadge(extraArr.length || 0)(Icon);

  const closeModal = () => {
    //closes the add ingredient modal
    navigation.navigate("Search");
  };

  const addExtra = () => {
    dispatch(addExtras(text));
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={closeModal} style={styles.closeItem}>
        <Icon name="close" />
      </Pressable>
      <KeyboardAvoidingView style={styles.modalContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          keyboardAppearance={"dark"}
          value={text}
          autoFocus={true}
          onSubmitEditing={addExtra}
          enablesReturnKeyAutomatically={true}
          placeholder="Enter Ingredient"
        />
      </KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.extraContainer}>
        {extraArr.map((ingredient: string, index: number) => (
          <View key={index} style={styles.extraItem}>
            <Pressable onPress={() => dispatch(deleteExtras(ingredient))}>
              <Icon name="close" />
            </Pressable>
            <Text style={styles.filterButtontext} numberOfLines={1}>{ingredient}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
  },
  modalContainer: {
    width: "80%",
    // height: height / 4,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "transparent",
    padding: 10,
  },
  extraContainer: {
    flexDirection: 'row',    // Arrange items horizontally
    flexWrap: 'wrap',        // Wrap to the next row when needed
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: CARD_MARGIN,
  },
  extraItem: {
    marginLeft: 5,
    marginVertical: 5,
    padding: 8,
    borderRadius: 14,
    backgroundColor: "#72927C",
    marginRight: 10,
    flexDirection: 'row',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  closeItem: {
    marginLeft: 5,
    marginVertical: 5,
    padding: 8,
    // borderWidth: 1,
    // borderColor: "black",
    // width: "fit-content",
    maxWidth: "100%",
    alignSelf: "flex-start",
    borderRadius: 14,
    backgroundColor: "#72927C",
    marginRight: 10,
    flexDirection: 'row',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  filterButtontext: {
    color: "white",
  },
  input: {
    borderColor: "#F5D2C2",
    height: 40,
    width: 280,
    borderWidth: 2,
    borderRadius: 34,
    padding: 10,
    // marginVertical: 6,
    // marginHorizontal: 6,
  },
});

export default ModalScreen;
