import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Text } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduce,
  addMeat,
  addDairy,
  addBaking,
  addDiet,
  deleteDairy,
  deleteProduce,
  deleteMeat,
  deleteBaking,
  deleteDiet,
} from "../../redux/features/selector/selectorSlice";
import { ingredients } from "../../services/ingredients/ingredients";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchStackParams } from "../../containers/Search";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 3;
const CARD_HEIGHT = (height - CARD_MARGIN * 9) / 8;

type CardsComponentsProps = {
  Produce: string[];
  ingredients: string[];
};

interface Ingredient {
  name: string,
  image: string | undefined
}

const IngredientCard: React.FC = () => {
  //redux data
  const dispatch = useDispatch();
  const currentTopic = useSelector((state: any) => state.counter.value);
  const lineLength = useSelector((state: any) => state.counter.lineLength);
  const produceData = useSelector((state: any) => state.selector.produce);
  const meatData = useSelector((state: any) => state.selector.meat);
  const dairyData = useSelector((state: any) => state.selector.dairy);
  const bakingData = useSelector((state: any) => state.selector.baking);
  const dietData = useSelector((state: any) => state.selector.diet);
  const SearchStack = createStackNavigator<SearchStackParams>();
  const navigation = useNavigation<NativeStackNavigationProp<SearchStackParams>>();
  
  //variables
  let scrollableIngredients = ingredients[currentTopic];
  const dataArr: any = [produceData, meatData, dairyData, bakingData, dietData];
  const addArr: any = [addProduce, addMeat, addDairy, addBaking, addDiet];
  const deleteArr: any = [
    deleteProduce,
    deleteMeat,
    deleteDairy,
    deleteBaking,
    deleteDiet,
  ];

  let current = dataArr[currentTopic];

  //functionality for highlighting selected cards
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const select = (ingredient: string) => {

    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(ingredient)) {
        return prevSelectedCards.filter((item) => item !== ingredient);
      } else {
        return [...prevSelectedCards, ingredient];
      }
    });

  };

  const handlePress = (ingredient: string) => {
    //adds ingredients to redux
    select(ingredient);
    let add = addArr[currentTopic];
    let remove = deleteArr[currentTopic];
    
    if (!current.hasOwnProperty(ingredient)) {
      dispatch(add(ingredient));
    } else if (current.hasOwnProperty(ingredient)) {
      dispatch(remove(ingredient));
    }
  };

  useEffect(() => {
    //checks for and highlights previously selected ingredients
    let currentData = Object.keys(current);

    if (currentData.length) {
      const matchIngredients = scrollableIngredients.map(ingredient => ingredient.name)

      currentData.forEach((item: string) => {
        if (matchIngredients.includes(item)) {
          select(item);
        }
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#72927C",
          borderBottomWidth: 5,
          borderRadius: 100,
          width: `${lineLength}%`,
        }}
      />
      <View
        style={{
          backgroundColor: "#F5D2C2",
          borderRadius: 100,
          marginTop: 20,
          marginLeft: "-7%",
          padding: 15,
          // flex: 1,
          // justifyContent: "center",
          width: `75%`,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "400",
            paddingLeft: 10,
            letterSpacing: 0.2,
            fontSize: 12,
          }}
        >
          Tap an ingredient to select it
        </Text>
        {/* <Pressable onPress={() => navigation.navigate("next")}>
          <Text style={{ textDecorationLine: "underline" }}>Skip</Text>
        </Pressable> */}
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {scrollableIngredients.map((ingredient: Ingredient, index: number) => (
          <View
            key={index}
            style={styles.card}
          >
            <Pressable onPress={() => handlePress(ingredient.name)}>
              <Image
                alt="ingredient"
                source={{
                  uri: ingredient.image,
                }}
                style={[
                  styles.image,
                  selectedCards.includes(ingredient.name) && styles.selectedImage,
                ]}
              />
            </Pressable>
            <Text style={styles.text}>{ingredient.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CARD_MARGIN,
    // marginTop: 50,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 3,
    width: CARD_WIDTH / 1,
    height: CARD_HEIGHT / 2,
    marginBottom: CARD_MARGIN,
  },
  card: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    marginTop: CARD_MARGIN,
    // marginBottom: CARD_MARGIN,
    backgroundColor: "white",
    // borderRadius: 80,
    elevation: 3,
    flexbox: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 1,
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    borderRadius: 10,
  },
  selectedImage: {
    backgroundColor: "#7474741a",
    borderColor: "#72927C",
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    paddingTop: 1,
    // fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

export default IngredientCard;
