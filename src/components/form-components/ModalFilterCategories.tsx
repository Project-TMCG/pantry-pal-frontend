import React, { useState, useMemo, useEffect } from "react";
import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { filters } from "./../../services/filters/filters";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from "react-redux";
import {
  saveIndex,
  saveValue,
} from "./../../redux/features/filterData/filterDataSlice";

const ModalFilterCategories = () => {
  // This is an array of the filter categories from the imported filters object
  interface filterType {
    "Dish Type": Array<string | null>;
    Equipment: Array<string | null>;
    Calories: Array<string | null>;
    "Protein (g)": Array<string | null>;
    "Fat (g)": Array<string | null>;
    "Fiber (g)": Array<string | null>;
    "Carbs (g)": Array<string | null>;
    "Cholesterol (mg)": Array<string | null>;
    Reviews: Array<string | null>;
  }

  type filterKeysType = keyof filterType;
  const filterKeys = Object.keys(filters) as filterKeysType[];

  interface selectedIdType {
    "Dish Type": string | undefined;
    Equipment: string | undefined;
    Calories: string | undefined;
    "Protein (g)": string | undefined;
    "Fat (g)": string | undefined;
    "Fiber (g)": string | undefined;
    "Carbs (g)": string | undefined;
    "Cholesterol (mg)": string | undefined;
    Reviews: string | undefined;
  }

  type selectedIdKeysType = keyof selectedIdType;
  type selectedFilterCatType = selectedIdKeysType | null;

  // Hook
  const [active, setActive] = useState("");
  const [selectedFilterCat, setSelectedFilterCat] =
    useState<selectedFilterCatType>(null);
  const [selectedId, setSelectedId] = useState<selectedIdType>({
    "Dish Type": undefined,
    Equipment: undefined,
    Calories: undefined,
    "Protein (g)": undefined,
    "Fat (g)": undefined,
    "Fiber (g)": undefined,
    "Carbs (g)": undefined,
    "Cholesterol (mg)": undefined,
    Reviews: undefined,
  });

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
      return filters[selectedFilterCat].map(
        (option: string, index: number) => ({
          id: `${index}`, // Use index as the key for options in a category
          label: option,
          value: selectedFilterCat + "_" + option,
        })
      );
    }
    return [];
  }, [selectedFilterCat]);

  //Redux
  const savedIndex = useSelector((state: any) => state.filterData.savedIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedId(savedIndex);
  }, []);

  useEffect(() => {
    const newSavedIndex = selectedId;
    dispatch(saveIndex(newSavedIndex));

    const newOptionValues = {
      "Dish Type":
        selectedId["Dish Type"] != undefined
          ? filters["Dish Type"][Number(selectedId["Dish Type"])]
          : undefined,
      Equipment:
        selectedId["Equipment"] != undefined
          ? filters["Equipment"][Number(selectedId["Equipment"])]
          : undefined,
      Calories:
        selectedId["Calories"] != undefined
          ? filters["Calories"][Number(selectedId["Calories"])]
          : undefined,
      "Protein (g)":
        selectedId["Protein (g)"] != undefined
          ? filters["Protein (g)"][Number(selectedId["Protein (g)"])]
          : undefined,
      "Fat (g)":
        selectedId["Fat (g)"] != undefined
          ? filters["Fat (g)"][Number(selectedId["Fat (g)"])]
          : undefined,
      "Fiber (g)":
        selectedId["Fiber (g)"] != undefined
          ? filters["Fiber (g)"][Number(selectedId["Fiber (g)"])]
          : undefined,
      "Carbs (g)":
        selectedId["Carbs (g)"] != undefined
          ? filters["Dish Type"][Number(selectedId["Dish Type"])]
          : undefined,
      "Cholesterol (mg)":
        selectedId["Cholesterol (mg)"] != undefined
          ? filters["Cholesterol (mg)"][Number(selectedId["Cholesterol (mg)"])]
          : undefined,
      Reviews:
        selectedId["Reviews"] != undefined
          ? filters["Reviews"][Number(selectedId["Reviews"])]
          : undefined,
    };
    dispatch(saveValue(newOptionValues));
  }, [selectedId]);

  return (
    <View>
      <ScrollView>
        {/* This produces the filter category buttons that appear in the modal */}
        {filterKeys.map((category: filterKeysType) => (
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
                    setSelectedId((prevSelectedId) => ({
                      ...prevSelectedId,
                      [selectedFilterCat]: selectedValue,
                    }));
                  }}
                  selectedId={selectedId[selectedFilterCat]}
                />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
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
  },
});

export default ModalFilterCategories;
