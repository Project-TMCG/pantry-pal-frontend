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
      <Pressable onPress={closeModal} style={styles.extraItem}>
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
        />
      </KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.extraContainer}>
        {extraArr.map((ingredient: string, index: number) => (
          <View key={index} style={styles.extraItem}>
            <Text numberOfLines={1}>{ingredient}</Text>
            <Pressable onPress={() => dispatch(deleteExtras(ingredient))}>
              <Icon name="close" />
            </Pressable>
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
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: CARD_MARGIN,
  },
  extraItem: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    // borderColor: "black",
    // width: "fit-content",
    maxWidth: "100%",
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    textAlign: "center",
    // marginBottom: 40,
  },
});

export default ModalScreen;
