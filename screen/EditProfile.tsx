// EditProfileScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Bookify</Text>
      </View>

      {/* Título */}
      <Text style={styles.pageTitle}>Editar Perfil</Text>

      {/* Foto de perfil */}
      <View style={styles.profilePictureContainer}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileIcon}>👤</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.editPhotoText}>Editar foto</Text>
        </TouchableOpacity>
      </View>

      {/* Información de perfil */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>Nombre</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>Username</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Género</Text>
          <Text style={styles.value}>Género</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Fecha de nacimiento</Text>
          <Text style={styles.value}>00/00/0000</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Fecha de creación</Text>
          <Text style={styles.value}>Octubre del 2017</Text>
        </View>
      </View>
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
  pageTitle: {
    fontSize: 20,
    color: '#99aabb',
    textAlign: 'center',
    marginVertical: 10,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1e5f74',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 40,
    color: '#ffffff',
  },
  editPhotoText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 16,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e5f74',
  },
  label: {
    fontSize: 16,
    color: '#99aabb',
  },
  value: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default EditProfile;
