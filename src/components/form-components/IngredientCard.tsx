import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduce } from "../../redux/features/selector/selectorSlice";
type CardsComponentsProps = {
  ingredients: string[];
};

const IngredientCard: React.FunctionComponent<CardsComponentsProps> = ({
  ingredients,
}) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const select = (ingredient: string) => {
    if (ingredient === selectedCard) {
      setSelectedCard(null);
    } else setSelectedCard(ingredient);
  };

  //stuff from other component
  const showData = useSelector((state: any) => state.selector.produce);
  const dispatch = useDispatch();

  const handlePress = (ingredient: string) => {
    select(ingredient);
    addIngredient(ingredient);
  };
  //object that temporarily stores selected ingredients
  const [ingredientsAdded, setIngredientsAdded] = useState<{
    [key: string]: number;
  }>({});

  const addIngredient = (ingredient: string): void => {
    //deletes ingredient if found in object
    if (ingredientsAdded.hasOwnProperty(ingredient)) {
      delete ingredientsAdded[ingredient];
    } else {
      //adds ingredient to the object in the form of a key if not selected yet
      ingredientsAdded[ingredient] = 1;
    }
    console.log(ingredientsAdded);
  };

  const submitIngredients = (): void => {
    //converts object into an array of keys and sends it into redux(global state)
    const arrToObjects = Object.keys(ingredientsAdded);

    dispatch(addProduce(arrToObjects));
    // console.log(arrToObjects);
  };
  //

  return (
    <ScrollView>
      <Button title="submit" onPress={() => submitIngredients()} />
      <View style={styles.container}>
        {ingredients.map((ingredient: string, index: number) => (
          <Card key={index}>
            <Pressable
              style={[
                styles.card,
                selectedCard === ingredient && styles.selectedCard,
              ]}
              onPress={() => {
                select(ingredient);
                addIngredient(ingredient);
              }}
            >
              <Card.Title>
                {ingredient}''{showData}
              </Card.Title>
              <Card.Divider />
              <Card.Image
                style={{
                  padding: 0,
                }}
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
              />
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
            </Pressable>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
  },
  selectedCard: {
    backgroundColor: "red",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default IngredientCard;
