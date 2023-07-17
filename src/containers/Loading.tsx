//Import Dependencies
import * as React from "react";
import { StyleSheet, Button, Text, View, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../App";

const Loading: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    //This is mock simulating an async API call for the query
    setTimeout(() => {
      navigation.navigate("Results")
    }, 4000)
  }, [])

  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="0000ff"/>
      <Text>"Hold on tight" Loading Results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
