import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.maintitle}>Expencify</Text>
      {/* <Text style={styles.title}>Expense Tracker</Text> */}
      <Text style={styles.subtitle}>Track your spending easily!</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Transactions')}>
        <Text style={styles.buttonText}>View Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AddExpense')}>
        <Text style={styles.buttonText}>Add New Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Budget')}>
        <Text style={styles.buttonText}>Set Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#282c34',
    marginBottom: 20,
  },
  maintitle:{
    fontSize:40,
    fontWeight: 'bold',
    color: '#16423C',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#646464',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6A9C89',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
