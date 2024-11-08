// RegisterScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookify</Text>
      
      {/* Icono de Usuario (puedes reemplazarlo con un icono real) */}
      <Text style={styles.icon}>👤</Text>
      
      {/* Campos de Registro */}
      <TextInput placeholder="Usuario" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Correo" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Confirmar correo" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Contraseña" style={styles.input} placeholderTextColor="#ccc" secureTextEntry />
      <TextInput placeholder="Confirmar contraseña" style={styles.input} placeholderTextColor="#ccc" secureTextEntry />

      {/* Texto de redirección */}
      <Text style={styles.redirectText}>¿Quieres entrar?</Text>

      {/* Botón de Registrarse */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 64,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e3d59',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  redirectText: {
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;
