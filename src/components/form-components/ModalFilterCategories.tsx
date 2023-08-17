import React, { useState, useMemo } from 'react'
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native'
import { filters } from './../../services/filters/filters'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'

const ModalFilterCategories = () => {

    // This is an array of the filter categories from the imported filters object
    const filterKeys = Object.keys(filters);

    // Hook
    const [selectedFilterCat, setSelectedFilterCat] = useState<string | null>(null)
    const [selectedId, setSelectedId] = useState<string | undefined>();

    // This function handles the selected filter categories
    const handleSelectedFilterCat = (category: string) => {
        if (category === selectedFilterCat) {
            setSelectedFilterCat(null);
        } else {
            setSelectedFilterCat(category);
            setSelectedId(undefined); // Clear the selected radio button when changing category
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
                                    radioButtons={getRadioButtons}
                                    onPress={(selectedId: string) => {
                                        setSelectedId(selectedId);
                                    }}
                                
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
        padding: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        marginTop: 4,
        borderRadius: 4,
    },
    optionText: {
        fontSize: 13,
        marginVertical: 4,
    },
}

)

export default ModalFilterCategories