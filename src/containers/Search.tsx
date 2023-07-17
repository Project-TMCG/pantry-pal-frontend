import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Easing,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IngredientCard from "../components/form-components/IngredientCard";
import { createStackNavigator } from "@react-navigation/stack";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { addExtras } from "../redux/features/selector/selectorSlice";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Badge, Icon, withBadge } from "react-native-elements";
//Types for React Navigation

export type SearchStackParams = {
  next: undefined;
  back: undefined;
  MyModal: undefined;
};

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 3;
const CARD_HEIGHT = (height - CARD_MARGIN * 9) / 8;

const Search: React.FC = () => {
  //redux data
  const dispatch = useDispatch();
  const SearchStack = createStackNavigator<SearchStackParams>();
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParams>>();
  const currentPage = useSelector((state: any) => state.counter.value);
  const extraData = useSelector((state: any) => state.selector.extras);

  //variables
  const [text, onChangeText] = useState("");
  const categories: string[] = ["Produce", "Meat & Seafood", "Dairy"];
  const extraArr = Object.keys(extraData);
  const BadgedIcon = withBadge(extraArr.length || 0)(Icon);

  const handleNext = () => {
    //handler for next page button
    if (currentPage !== 2) {
      dispatch(increment());
      navigation.push("next");
    }
  };
  const handleBack = () => {
    //handler for back button
    if (currentPage !== 0) {
      dispatch(decrement());
      navigation.push("back");
    } else navigation.pop();
  };

  const closeModal = () => {
    //closes the add ingredient modal
    navigation.push("back");
  };

  const addExtra = () => {
    if (text !== "") {
      dispatch(addExtras(text));
    }
    console.log(text);
  };

  //modal component

  function ModalScreen() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            keyboardAppearance={"dark"}
            value={text}
          />
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          {extraArr.map((ingredient: string, index: number) => (
            <Pressable key={index} style={[]}>
              <Text>{ingredient}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable onPress={addExtra}>
          <Text>Add</Text>
        </Pressable>
        <Pressable onPress={closeModal}>
          <Text>Close</Text>
        </Pressable>
      </KeyboardAvoidingView>
    );
  }

  //home screen component

  function HomeScreen() {
    return (
      <View
        style={{
          flex: 0,
          height: CARD_HEIGHT * 2,
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <View style={styles.buttonContainer}>
          <Pressable
            //opens the modal
            style={{ backgroundColor: "green" }}
            onPress={() => navigation.navigate("MyModal")}
          >
            <Icon name="add" />
          </Pressable>
          <Badge value={extraArr.length || 0} status="error" />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleNext();
          }}
        >
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SearchStack.Navigator initialRouteName="next">
        <SearchStack.Screen
          name="next"
          component={IngredientCard}
          options={{
            headerTitle: `${categories[currentPage]}`,
            headerLeft: () => (
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleBack();
                }}
              >
                <Text style={styles.text}>🔙</Text>
              </Pressable>
            ),
          }}
        />
        <SearchStack.Screen
          name="back"
          component={IngredientCard}
          options={{
            headerTitle: `${categories[currentPage]}`,
            headerLeft: () => (
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleBack();
                }}
              >
                <Text style={styles.text}>🔙</Text>
              </Pressable>
            ),
            gestureDirection: "horizontal-inverted",
          }}
        />
        <SearchStack.Group screenOptions={{ presentation: "modal" }}>
          <SearchStack.Screen
            name="MyModal"
            component={ModalScreen}
            options={{
              headerShown: false,
              keyboardHandlingEnabled: true,
            }}
          />
        </SearchStack.Group>
      </SearchStack.Navigator>
      <HomeScreen />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: CARD_MARGIN,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "green",
    width: CARD_WIDTH / 2,
    height: CARD_HEIGHT / 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "white",
    width: CARD_WIDTH / 2,
    height: CARD_HEIGHT / 2,
  },
  inputContainer: {
    width: "80%",
    marginBottom: CARD_MARGIN,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: "black",
  },
});

export default Search;
