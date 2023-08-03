import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduce } from "../../redux/features/selector/selectorSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";

// Card Sizes that are being tested
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 2;
const CARD_HEIGHT = (height * 2.25 - CARD_MARGIN * 10) / 9;
const IMAGE_WIDTH = CARD_WIDTH * 0.9
const IMAGE_HEIGHT = CARD_HEIGHT * 0.85
console.log(IMAGE_WIDTH)
console.log(IMAGE_HEIGHT)

type CardsComponentsProps = {
    recipes: string[];
};

const RecipeCard: React.FunctionComponent<CardsComponentsProps> = ({
    recipes,
}) => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {recipes.map((recipe: string, index: number) => (
                    <View
                        style = {
                            styles.card
                        }
                    >
                        <Pressable
                            onPress={() => navigation.navigate("Details")}
                        >
                            <View style={styles.imageShadow}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                                }}
                            />
                            </View>
                            <Text style={styles.title}>
                                {recipe}
                            </Text>
                            <Text>
                                Rating
                            </Text>
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
        padding: CARD_MARGIN,
    },
    // Testing this styling for recipe cards, futher styling edits needed
    scrollContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: "white",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginTop: CARD_MARGIN,
        marginBottom: CARD_MARGIN,
        // textAlign: "center",
        // justifyContent: "center",
        // alignItems: "center",
    },
    title: {
        fontWeight: "bold",
    },
    image: {
        height: IMAGE_HEIGHT,
        width: IMAGE_WIDTH,
        borderRadius: 20,
    },
    imageShadow: {
        height: IMAGE_HEIGHT,
        width: IMAGE_WIDTH,
        borderRadius: 20,
        // Shadow styling
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    }
});

export default RecipeCard;
