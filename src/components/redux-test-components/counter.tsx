//Import Dependencies
import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

//Import Redux Store & Action Dispatch
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './../../redux/features/counter/counterSlice'

//Declare and Import Types
interface Props {

}

const Counter: React.FC<Props> = ({  }) => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <View style={styles.container}>
        <Button title="Add One" onPress={() => dispatch(increment())}/>
        <Button title="Subtract One" onPress={() => dispatch(decrement())}/>
        <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;