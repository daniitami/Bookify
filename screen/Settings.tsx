import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyEnabled, setPrivacyEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((previousState) => !previousState);
  const togglePrivacy = () => setPrivacyEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Sección de Ajustes */}
      <Text style={styles.sectionTitle}>Ajustes</Text>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Editar perfil</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Salvados</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#3498db' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Privado</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={privacyEnabled ? '#3498db' : '#f4f3f4'}
          onValueChange={togglePrivacy}
          value={privacyEnabled}
        />
      </View>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Centro de ayuda */}
      <Text style={styles.sectionTitle}>Centro de ayuda</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Ayuda</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Sobre</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#555',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
  },
  arrow: {
    fontSize: 18,
    color: '#ffffff',
    paddingHorizontal: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 20,
  },
});

export default Settings;
