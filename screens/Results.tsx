//Import Dependencies
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Results() {

  
    return (
        <View style={styles.container}>
            <Text>Results Page</Text>
        </View>
    )
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });