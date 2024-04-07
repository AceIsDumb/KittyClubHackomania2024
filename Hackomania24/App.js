import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import CartScreen from './Cartscreen';

const ShopeeCleaningSupplies = () => {
  const products = [
    {
      id: 1,
      name: 'Heavy Duty Cellulose Cleaning Sponge',
      price: '$19.95',
      image: './Placeholder.png',
    },
    {
      id: 2,
      name: 'Cordless Hand held Vacuum',
      price: '$60.55',
      image: './Placeholder.png',
    },
    {
      id: 3,
      name: 'Dettol Antibacterial Liquid Hand Wash 250ml',
      price: '$35.99',
      image: './Placeholder.png',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopee Cleaning Supplies</Text>
      </View>
      <View style={styles.filters}>
        <TextInput style={styles.filterInput} placeholder="Search for products" />
        <View style={styles.filterButtons}>
          <Text style={styles.filterButton}>Dettol</Text>
          <Text style={styles.filterButton}>Heavy Duty Cellulose Cleaning Sponge</Text>
          <Text style={styles.filterButton}>Cordless Hand held Vacuum</Text>
        </View>
      </View>
      <View style={styles.products}>
        {products.map((product) => (
          <View style={styles.product} key={product.id}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.account}>
        <Text style={styles.accountText}>Account Info</Text>
        <Text style={styles.accountText}>0</Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigateToCart()}>
        <Text style={styles.cartButtonText}>Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CartButton = ({ onPress }) => (
  <TouchableOpacity style={styles.cartButton} onPress={onPress}>
    <Text style={styles.cartButtonText}>Cart</Text>
  </TouchableOpacity>
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  filters: {
    padding: 16,
  },

  filterInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  filterButton: {
    backgroundColor: '#ddd',
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },

  products: {
    padding: 16,
  },

  product: {
    marginBottom: 16,
  },

  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    resizeMode: 'cover',
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f00',
  },

  account: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#f0c',
    padding: 12,
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShopeeCleaningSupplies;