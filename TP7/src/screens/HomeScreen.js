// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const nombre = 'Tomas';
  const apellido = 'Gomez';

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenido}>Bienvenido {nombre} {apellido} !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bienvenido: {
    fontSize: 24,
  },
});

export default HomeScreen;
