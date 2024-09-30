import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const recentActivity = [
  { id: '1', title: 'One Piece', cover: require('../assets/id_1.jpg') },
  { id: '2', title: 'Naruto', cover: require('../assets/id_2.jpg') },
  { id: '3', title: 'Bleach', cover: require('../assets/id_3.jpg') },
  { id: '4', title: 'Goodbye Eri', cover: require('../assets/id_4.jpg') },
  { id: '5', title: 'Jujutsu Kaisen', cover: require('../assets/id_5.jpg') },
  { id: '6', title: 'Tokyo Ghoul', cover: require('../assets/id_6.jpg') },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Información del usuario */}
      <View style={styles.header}>
        <Image source={require('../assets/pfp.jpg')} style={styles.profilePic} />
        <Text style={styles.userName}>Daniel Mediavilla</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Editar perfil</Text>
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Reseñas</Text>
          </View>
        </View>
      </View>

      {/* Actividad reciente */}
      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <FlatList
        horizontal
        data={recentActivity}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={item.cover} style={styles.bookCover} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  editProfileText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  bookItem: {
    marginRight: 10,
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
});

export default Profile;