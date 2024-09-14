import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import

const AddExpenseScreen = ({ navigation, route }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Debit'); // Default value: 'Debit'
  const [category, setCategory] = useState('Food'); // Default value: 'Food'
  const [date, setDate] = useState(new Date().toLocaleString());

  // Function to handle adding the transaction
  const handleAddExpense = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Invalid Input', 'Please enter a valid amount');
      return;
    }

    // Transaction object to be added
    const newTransaction = {
      id: Date.now(), // unique ID
      amount: parseFloat(amount),
      type: type,
      category: category,
      date: date,
    };

    // Call a function from parent or route to add this transaction (Mock for now)
    route.params.addTransaction(newTransaction);

    // Clear inputs after adding
    setAmount('');
    setType('Debit');
    setCategory('Food');
    setDate(new Date().toLocaleString());

    // Navigate back to transactions list
    navigation.navigate('Transactions');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Credit" value="Credit" />
      </Picker>

      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Clothes" value="Clothes" />
        <Picker.Item label="Grocery" value="Grocery" />
        <Picker.Item label="Bills" value="Bills" />
        <Picker.Item label="Person Transfer" value="Person Transfer" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Pharmacy" value="Pharmacy" />
        <Picker.Item label="Miscellaneous" value="Miscellaneous" />
      </Picker>

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date"
        value={date}
        onChangeText={setDate}
      />

      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
  },
});

export default AddExpenseScreen;
