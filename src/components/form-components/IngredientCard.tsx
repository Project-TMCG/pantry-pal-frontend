//Import Dependencies
import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';


type CardsComponentsProps = {
    ingredients: string[];
};

const IngredientCard: React.FunctionComponent<CardsComponentsProps> = ({ ingredients }) => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {ingredients.map((ingredient: string, index: number) => (
                        <Card>
                            <Card.Title>{ingredient}</Card.Title>
                            <Card.Divider />
                            <Card.Image
                                style={{
                                    padding: 0
                                }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{ marginRight: 10 }}
                                    />
                                }
                                buttonStyle={{

                                }}
                                title="VIEW NOW"
                            />
                        </Card>
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
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