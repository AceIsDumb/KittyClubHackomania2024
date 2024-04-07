import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
     .then(response => response.json())
     .then(data => setTransactions(data))
     .catch(error => console.error(error));
  }, []);

  return (
    <View>
      {transactions.map(transaction => (
        <Text key={transaction.id}>
          {transaction.amount} - {transaction.time} - {transaction.is_fraud? 'Fraud' : 'Not Fraud'}
        </Text>
      ))}
    </View>
  );
};

export default Transactions;