import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";

interface Props {
  step: {
    amount: number;
    unit: string;
    name: string;
  };
}

const ServingSize: React.FC<Props> = ({ step }) => {
  const servingSize = useSelector((state: any) => state.counter.servingSize);
  const initialServingSize = useSelector(
    (state: any) => state.counter.initialServingSize
  );

  const [amount, setAmount] = useState(step.amount);

  const singleServingAmount = step.amount / initialServingSize;

  useEffect(() => {
    setAmount(servingSize * singleServingAmount);
  }, [servingSize]);

  return (
    <Text style={Styles.listText}>
      {`${amount} ${step.unit} of ${step.name}`}
    </Text>
  );
};

const Styles = StyleSheet.create({
  listText: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default ServingSize;
