// LoginScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookify</Text>
      
      {/* Icono de Usuario (puedes reemplazarlo con un icono real) */}
      <Text style={styles.icon}>👤</Text>
      
      {/* Campos de Login */}
      <TextInput placeholder="Correo/Nombre de usuario" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Contraseña" style={styles.input} placeholderTextColor="#ccc" secureTextEntry />

      {/* Opciones de redirección */}
      <View style={styles.redirectContainer}>
        <Text style={styles.redirectText}>¿Quieres registrarte?</Text>
        <Text style={styles.redirectText}>Recuperar contraseña</Text>
      </View>

      {/* Botón de Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
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
  redirectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  redirectText: {
    color: '#ccc',
    textAlign: 'center',
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

export default LogIn;
