// HelpScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Help = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Bookify</Text>
      </View>

      {/* Ayuda Section */}
      <Text style={styles.sectionTitle}>Ayuda</Text>

      {/* Opciones de Ayuda */}
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('FAQ')}>
        <Text style={styles.optionIcon}>❓</Text>
        <Text style={styles.optionText}>Preguntas frecuentes</Text>
        <Text style={styles.arrowIcon}>➔</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ReportProblem')}>
        <Text style={styles.optionIcon}>❗</Text>
        <Text style={styles.optionText}>Reportar Problemas</Text>
        <Text style={styles.arrowIcon}>➔</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('LegalAspects')}>
        <Text style={styles.optionIcon}>👤</Text>
        <Text style={styles.optionText}>Aspectos legales</Text>
        <Text style={styles.arrowIcon}>➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 20,
    color: '#ffffff',
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#ffffff',
    marginVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1e5f74',
  },
  optionIcon: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default Help;
