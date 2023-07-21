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
  deleteDairy,
  deleteProduce,
  deleteMeat,
} from "../../redux/features/selector/selectorSlice";
import { ingredients } from "../../services/ingredients/ingredients";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 3;
const CARD_HEIGHT = (height - CARD_MARGIN * 9) / 8;

type CardsComponentsProps = {
  Produce: string[];
  ingredients: string[];
};

const IngredientCard: React.FC = () => {
  //redux data
  const dispatch = useDispatch();
  const currentTopic = useSelector((state: any) => state.counter.value);
  const lineLength = useSelector((state: any) => state.counter.lineLength);
  const produceData = useSelector((state: any) => state.selector.produce);
  const meatData = useSelector((state: any) => state.selector.meat);
  const dairyData = useSelector((state: any) => state.selector.dairy);

  //variables
  let scrollableIngredients = ingredients[currentTopic];
  const dataArr: any = [produceData, meatData, dairyData];
  const addArr: any = [addProduce, addMeat, addDairy];
  const deleteArr: any = [deleteProduce, deleteMeat, deleteDairy];
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
    //checks for and highlights previously slected ingredients
    let currentData = Object.keys(current);

    if (currentData.length) {
      currentData.forEach((item: string) => {
        if (scrollableIngredients.includes(item)) {
          select(item);
        }
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 5,
          width: `${lineLength}%`,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {scrollableIngredients.map((ingredient: string, index: number) => (
          <View
            key={index}
            style={[
              styles.card,
              selectedCards.includes(ingredient) && styles.selectedCard,
            ]}
          >
            <Pressable onPress={() => handlePress(ingredient)}>
              <Image
                alt="ingredient"
                style={{
                  height: 90,
                  width: 90,
                  resizeMode: "contain",
                  borderRadius: 10,
                }}
                source={{
                  uri: "https://bonnieplants.com/cdn/shop/products/060721_T110854_201997_202120_Bonnie_RomaineLettuce_ALT_01.jpg?v=1653420386",
                }}
              />
            </Pressable>
            <Text style={styles.text}>{ingredient}</Text>
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
    height: CARD_HEIGHT,
    marginTop: CARD_MARGIN * 4,
    marginBottom: CARD_MARGIN,
    backgroundColor: "white",
    // borderRadius: 80,
    elevation: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#7474741a",
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    paddingTop: 10,
    // fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

export default IngredientCard;
