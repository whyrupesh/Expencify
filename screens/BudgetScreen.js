import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BudgetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Budget</Text>
      {/* Add form for setting budget limits */}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#282c34',
  },
});

export default BudgetScreen;
