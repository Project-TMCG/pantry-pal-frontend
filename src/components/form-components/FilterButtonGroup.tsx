//Import Dependencies
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder, Animated } from 'react-native';

//Type Declaration for filterButton props
type filterButtonsProps = {
    options: string[];
    onFilterSelect: (filter: string) => void;
}

const FilterButtonGroup: React.FC<filterButtonsProps> = ({ options, onFilterSelect }) => {
    //Hook handling the seleted filter button
    const [selectedFilter, setSelectedFilter] = useState<string>('All');

    const handleFilterSelection = (filter: string) => {
        setSelectedFilter(filter);
        onFilterSelect(filter);
    };

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x }]),
        onPanResponderRelease: () => {
            pan.extractOffset()
        },
    }),
    ).current;

    return (
        <View style={styles.container}>
            {/* Animated.View tag animates the position of the buttons when they are dragged */}
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }],
                }}
                {...panResponder.panHandlers}>
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
            </Animated.View>
        </View>
    );
};

//Styling for the buttons
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    filterButton: {
        borderRadius: 34,
        padding: 8,
        marginHorizontal: 5,
        marginVertical: 4,
        backgroundColor: '#72927C',
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
});

export default FilterButtonGroup;
