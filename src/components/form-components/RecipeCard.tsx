import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduce } from "../../redux/features/selector/selectorSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";

type CardsComponentsProps = {
    recipes: string[];
};

const RecipeCard: React.FunctionComponent<CardsComponentsProps> = ({
    recipes,
}) => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <ScrollView>
            <View style={styles.container}>
                {recipes.map((recipe: string, index: number) => (
                    <Card key={index}>
                        <Pressable
                            style={[
                                styles.card,
                                // selectedCards.includes(recipe) && styles.selectedCard,
                            ]}
                            onPress={() => navigation.navigate("Details")}
                        >
                            <Card.Title>
                                {recipe}
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
        // flex: 1,
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

export default RecipeCard;
