import React, { useState, useMemo, useEffect } from 'react'
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native'
import { filters } from './../../services/filters/filters'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from "react-redux";
import { setNewData } from "./../../redux/features/filterData/filterDataSlice";

const ModalFilterCategories = () => {

    // This is an array of the filter categories from the imported filters object
    interface filterType {
        "Dish Type": string[],
        "Equipment": string[],
        "Calories": string[],
        "Protein (g)": string[],
        "Fat (g)": string[],
        "Fiber (g)": string[],
        "Carbs (g)": string[],
        "Cholesterol": string[],
        "Reviews": string[],
    }

    type filterKeysType = keyof filterType
    const filterKeys = Object.keys(filters) as filterKeysType[];

    interface selectedIdType {
        "Dish Type": string,
        "Equipment": string,
        "Calories": string,
        "Protein (g)": string,
        "Fat (g)": string,
        "Fiber (g)": string,
        "Carbs (g)": string,
        "Cholesterol": string,
        "Reviews": string,
    }

    type selectedIdKeysType = keyof selectedIdType
    type selectedFilterCatType = selectedIdKeysType | null

    // Hook
    const [active, setActive] = useState("")
    const [selectedFilterCat, setSelectedFilterCat] = useState<selectedFilterCatType>(null)
    const [selectedId, setSelectedId] = useState<selectedIdType>({
        "Dish Type": "",
        "Equipment": "",
        "Calories": "",
        "Protein (g)": "",
        "Fat (g)": "",
        "Fiber (g)": "",
        "Carbs (g)": "",
        "Cholesterol": "",
        "Reviews": "",
    });
    // console.log(selectedFilterCat)
    // console.log(selectedId)

    // This function handles the selected filter categories
    const handleSelectedFilterCat = (category: selectedFilterCatType) => {
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
                value: selectedFilterCat + "_" + option,
            }));
        }
        return [];
    }, [selectedFilterCat]);

    //Redux
    const filterData = useSelector((state:any) => state.filterData)
    const dispatch = useDispatch()

    useEffect(() => {
        setSelectedId(filterData)
    }, [])

    useEffect(() => {
        console.log(selectedId)
        const newFilterData = selectedId;
        dispatch(setNewData(newFilterData))
    }, [selectedId])

    return (
        <View>
            <ScrollView>
                {/* This produces the filter category buttons that appear in the modal */}
                {filterKeys.map((category: filterKeysType) =>
                    <View>
                        <Pressable
                            style={styles.button}
                            onPress={() => handleSelectedFilterCat(category)}
                        >
                            <Text style={styles.buttonText}>{category}</Text>
                        </Pressable>
                        {/* This produces the dropdown filter options */}
                        {category === selectedFilterCat && (
                            <View style={styles.optionsContainer}>
                                <RadioGroup
                                    containerStyle={styles.optionText}
                                    radioButtons={getRadioButtons}
                                    onPress={(selectedValue) => {
                                        setSelectedId(prevSelectedId => ({
                                            ...prevSelectedId,
                                            [selectedFilterCat]: selectedValue,
                                        }));
                                        
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