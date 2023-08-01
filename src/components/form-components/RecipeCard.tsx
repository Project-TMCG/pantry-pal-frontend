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
const CARD_HEIGHT = (height - CARD_MARGIN * 9) / 8;

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
                    <View >
                            <Pressable
                                onPress={() => navigation.navigate("Details")}
                            >
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                                    }}
                                />
                                <Text>
                                    {recipe}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
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
        marginTop: CARD_MARGIN * 4,
        marginBottom: CARD_MARGIN,
        // borderRadius: 80,
        elevation: 3,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        padding: 0,
        height: 120,
        width: 120,
        borderRadius: 20,

    },
});

export default RecipeCard;
