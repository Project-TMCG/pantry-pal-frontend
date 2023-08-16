import React, { useState } from 'react'
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native'
import { filters} from './../../services/filters/filters'

const ModalFilterCategories = () => {

    // This is an array of the filter categories from the imported filters object
    const filterKeys = Object.keys(filters);

    // Hook
    const [seletedFilterCat, setSelectedFilterCat] = useState<string|null>(null)

    // This function handles the selected filter categories
    const handleSelectedFilterCat = (category:string) => {
        if(category == seletedFilterCat){
            setSelectedFilterCat(null)
        }
        else{
            setSelectedFilterCat(category)
        }
    }

    return (
        <View>
            <ScrollView>
                {/* This produces the filter category buttons that appear in the modal */}
                {filterKeys.map((category: string) =>
                    <View>
                        <Pressable 
                        style={styles.button}
                        onPress={()=> handleSelectedFilterCat(category)}
                        >
                            <Text style={styles.buttonText}>{category}</Text>
                        </Pressable>
                        {/* This produces the dropdown filter options */}
                        {seletedFilterCat == category && (
                            <View style={styles.optionsContainer}>
                                {filters[category].map((option: string)=> (
                                    <Text key={option} style={styles.optionText}>
                                        {option}
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>
                )}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:25,
        padding: 6,
        borderColor: "#72927C",
        borderWidth: 2,
        margin: 4,
    },
    buttonText:{
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