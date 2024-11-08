import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonNavegador = ({ navigation, destination, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(destination)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e5f74',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotonNavegador;
