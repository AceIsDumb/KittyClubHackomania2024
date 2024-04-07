import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TopBar = () => {
  return (
    <View
      style={{
        backgroundColor: '#333',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
        Shopee
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#333', fontSize: 18 }}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;