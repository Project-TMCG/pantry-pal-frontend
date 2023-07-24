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
import {
  decrement,
  increment,
  shrinkLine,
  widenLine,
} from "../redux/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { addExtras } from "../redux/features/selector/selectorSlice";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  Badge,
  Button,
  ButtonGroup,
  Icon,
  withBadge,
} from "react-native-elements";
//Types for React Navigation

import { RootStackParams } from "../../App";
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
  const RootNavigate =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParams>>();
  const currentPage = useSelector((state: any) => state.counter.value);
  const extraData = useSelector((state: any) => state.selector.extras);

  //variables
  const [lineWidth, setLineWidth] = useState(25);
  const categories: string[] = [
    "Produce",
    "Meat & Seafood",
    "Dairy",
    "Baking Goods & Spices",
    "Dietary Restrictions",
  ];
  const extraArr = Object.keys(extraData);
  const badgeVisible = extraArr.length || 0;

  const handleNext = () => {
    //handler for next page button
    if (currentPage !== 4) {
      dispatch(increment());
      navigation.push("next");
      dispatch(widenLine());
    }

    if (lineWidth < 100) {
    }
  };
  const handleBack = () => {
    //handler for back button

    if (currentPage !== 0) {
      dispatch(decrement());
      navigation.push("back");
      dispatch(shrinkLine());
    } else navigation.pop();
  };

  //home screen component

  function HomeScreen() {
    return (
      <View
        style={{
          flex: 0,
          height: CARD_HEIGHT * 3,
          width: width,
          alignItems: "flex-end",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View style={styles.buttonContainer}>
          <View>
            <Pressable
              //opens the modal
              style={styles.addButton}
              onPress={() => RootNavigate.navigate("Modal")}
            >
              <Icon name="add" color={"white"} />
            </Pressable>
            <Text style={{ textAlign: "center", paddingTop: 10 }}>Other</Text>
          </View>
          <Badge
            value={badgeVisible}
            status="error"
            badgeStyle={{ opacity: extraArr.length ? 100 : 0 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", paddingRight: 30 }}>
          <Pressable
            style={styles.button}
            onPress={() => {
              handleNext();
            }}
          >
            <Icon name="arrow-forward" color={"white"} />
          </Pressable>
          {/* Mock button for testing route to Loading Screen, to be deleted later */}
          <Button
            title={"Results"}
            onPress={() => RootNavigate.navigate("Loading")}
          />
          {/* End of mock button code */}
        </View>
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
            headerTitleStyle: { display: "none" },
            headerLeft: () => (
              <View style={styles.header}>
                <Pressable
                  style={styles.backButton}
                  onPress={() => {
                    handleBack();
                  }}
                >
                  <Icon name="arrow-back" color={"black"} />
                </Pressable>
                <Text
                  style={styles.headerText}
                >{`${categories[currentPage]}`}</Text>
              </View>
            ),
          }}
        />
        <SearchStack.Screen
          name="back"
          component={IngredientCard}
          options={{
            headerTitleStyle: { display: "none" },
            headerLeft: () => (
              <View style={styles.header}>
                <Pressable
                  style={styles.backButton}
                  onPress={() => {
                    handleBack();
                  }}
                >
                  <Icon name="arrow-back" color={"black"} />
                </Pressable>
                <Text
                  style={styles.headerText}
                >{`${categories[currentPage]}`}</Text>
              </View>
            ),
            gestureDirection: "horizontal-inverted",
          }}
        />
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
    marginLeft: 40,
    marginTop: 30,
    width: width,
    alignItems: "stretch",
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: CARD_MARGIN,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#72927C",
    width: 50,
    height: CARD_HEIGHT / 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#72927C",
    width: CARD_WIDTH / 2,
    height: CARD_HEIGHT / 2,
    marginRight: 10,
  },
  backButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: CARD_WIDTH / 2,
    height: CARD_HEIGHT / 2,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width,
  },
  icon: {
    color: "white",
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
  headerText: {
    fontSize: 20,
  },
});

export default Search;
