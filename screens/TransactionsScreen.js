import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TransactionCard from './TransactionCard';

const TransactionsScreen = () => {
  const transactions = [
    { id: 1, amount: 500, type: 'Debit', category: 'Food', date: '2024-09-13 12:30 PM' },
    { id: 2, amount: 1200, type: 'Credit', category: 'Person Transfer', date: '2024-09-12 03:15 PM' },
    { id: 3, amount: 250, type: 'Debit', category: 'Pharmacy', date: '2024-09-11 08:00 AM' },
    { id: 4, amount: 2000, type: 'Debit', category: 'Travel', date: '2024-09-10 05:45 PM' },
    { id: 5, amount: 1500, type: 'Debit', category: 'Bills', date: '2024-09-09 01:00 PM' },
  ];

  return (
    <ScrollView style={styles.container}>
      {transactions.map((transaction) => (
        <TransactionCard 
          key={transaction.id}
          amount={transaction.amount}
          type={transaction.type}
          category={transaction.category}
          date={transaction.date}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f5',
  },
});

export default TransactionsScreen;
