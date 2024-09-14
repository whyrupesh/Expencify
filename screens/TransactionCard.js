import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionCard = ({ amount, type, category, date }) => {
  // Function to return the emoji based on category
  const getCategoryEmoji = (category) => {
    switch (category) {
      case 'Food':
        return '🍔';
      case 'Clothes':
        return '👗';
      case 'Grocery':
        return '🛒';
      case 'Bills':
        return '💡';
      case 'Person Transfer':
        return '💸';
      case 'Travel':
        return '✈️';
      case 'Pharmacy':
        return '💊';
      case 'Miscellaneous':
        return '🔧';
      default:
        return '❓';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={type==='Credit' ? styles.amountCredit : styles.amountDebit}>
          {type === 'Credit' ? '+' : '-'} ₹{amount}
        </Text>
        <Text style={[styles.type, { color: type === 'Credit' ? 'green' : 'red' }]}>
          {type}
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{getCategoryEmoji(category)} {category}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionCard;
