//Import Dependencies
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder, Animated, Dimensions, ScrollView } from 'react-native';

//Type Declaration for filterButton props
type filterButtonsProps = {
    options: string[];
    onFilterSelect: (filter: string) => void;
}

const screenWidth = Dimensions.get('window').width

const firstButtonMargin = 10;

const lastButtonMargin = 10;

const FilterButtonGroup: React.FC<filterButtonsProps> = ({ options, onFilterSelect }) => {
    //Hook handling the seleted filter button
    const [selectedFilter, setSelectedFilter] = useState<string>('All');

    const handleFilterSelection = (filter: string) => {
        setSelectedFilter(filter);
        onFilterSelect(filter);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <View style={styles.buttonGroup}>
                    {options.map((filter: string, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.filterButton,
                                selectedFilter === filter && styles.selectedFilterButton,
                            ]}
                            onPress={() => handleFilterSelection(filter)}
                        >
                            <Text
                                style={[
                                    styles.filterButtonText,
                                    selectedFilter === filter && styles.selectedFilterButtonText,
                                ]}
                            >
                                {filter}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

//Styling for the buttons
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        height: 45,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
        height: 40,
    },
    filterButton: {
        borderRadius: 14,
        padding: 8,
        marginHorizontal: 5,
        marginVertical: 4,
        backgroundColor: '#72927C',
        // Shadow styling
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    },
    selectedFilterButton: {
        backgroundColor: '#007AFF',
    },
    filterButtonText: {
        fontSize: 12,
        color: '#FFFCF7',
    },
    selectedFilterButtonText: {
        color: '#FFF',
    },
    firstButton: {
        marginLeft: firstButtonMargin,
    },
    lastButton: {
        marginRight: lastButtonMargin,
    }
});

export default FilterButtonGroup;
