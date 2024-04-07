import React from 'react';
import { View, Text, Button } from 'react-native';

const CartScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Cart Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default CartScreen;