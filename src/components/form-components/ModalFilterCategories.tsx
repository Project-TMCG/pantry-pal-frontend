import React, { useState, useMemo } from 'react'
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native'
import { filters } from './../../services/filters/filters'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'

const ModalFilterCategories = () => {

    // This is an array of the filter categories from the imported filters object
    const filterKeys = Object.keys(filters);

    interface selectedIdProps {
        "Dish Type": string,
        "Equipment": string,
        "Calories": string,
        "Protien (g)": string,
        "Fat (g)": string,
        "Fiber (g)": string,
        "Carbs (g)": string,
        "Cholesterol": string,
        "Reviews": string,
    }

    interface selectedFilterCatProps {
        selection: "Dish Type"|"Equipment"|"Calories"|"Protien (g)"| "Fat (g)"| "Fiber (g)"|"Carbs (g)"|"Cholesterol"|"Reviews"
    }

    // Hook
    const [selectedFilterCat, setSelectedFilterCat] = useState<selectedFilterCatProps | null>(null)
    const [selectedId, setSelectedId] = useState<selectedIdProps>({
        "Dish Type": "",
        "Equipment": "",
        "Calories": "",
        "Protien (g)": "",
        "Fat (g)": "",
        "Fiber (g)": "",
        "Carbs (g)": "",
        "Cholesterol": "",
        "Reviews": "",
    });
    console.log(selectedFilterCat)
    console.log(selectedId)

    // This function handles the selected filter categories
    const handleSelectedFilterCat = (category: selectedFilterCatProps) => {
        if (category === selectedFilterCat) {
            setSelectedFilterCat(null);
        } else {
            setSelectedFilterCat(category);
        
        }
    };

    const getRadioButtons = useMemo(() => {
        if (selectedFilterCat) {
            return filters[selectedFilterCat].map((option: string, index: number) => ({
                id: `${index}`, // Use index as the key for options in a category
                label: option,
                value: option,
            }));
        }
        return [];
    }, [selectedFilterCat]);


    return (
        <View>
            <ScrollView>
                {/* This produces the filter category buttons that appear in the modal */}
                {filterKeys.map((category: string) =>
                    <View>
                        <Pressable
                            style={styles.button}
                            onPress={() => handleSelectedFilterCat(category)}
                        >
                            <Text style={styles.buttonText}>{category}</Text>
                        </Pressable>
                        {/* This produces the dropdown filter options */}
                        {selectedFilterCat == category && (
                            <View style={styles.optionsContainer}>
                                <RadioGroup
                                    containerStyle={styles.optionText}
                                    radioButtons={getRadioButtons}
                                    onPress={(selectedValue) => {
                                        const newSelectedId = selectedId
                                        newSelectedId[selectedFilterCat] = selectedValue
                                        setSelectedId(newSelectedId);
                                    }}
                                    selectedId={selectedId[selectedFilterCat]}
                                />
                                {/* {filters[category].map((option: string) => (
                                    <Text key={option} style={styles.optionText}>
                                        {option}
                                    </Text>
                                ))} */}
                            </View>
                        )}
                    </View>
                )}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        padding: 6,
        borderColor: "#72927C",
        borderWidth: 2,
        margin: 4,
    },
    buttonText: {
        fontSize: 13,
    },
    optionsContainer: {
        // padding: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        marginTop: 4,
        borderRadius: 4,
        alignItems: "flex-start",
        marginLeft: 1,
    },
    optionText: {
        fontSize: 5,
        marginVertical: 4,
    },
    radioButtonContainer: {
        fontSize: 13,
    }
}

)

export default ModalFilterCategories