//Import Dependencies
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details() {

  
    return (
        <View style={styles.container}>
            <Text>Details Page</Text>
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