import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

interface Post {
  id: string;
  username: string;
  profilePic: string;
  bookImages: string[];
  description: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: '1',
    username: 'Placeholder 1',
    profilePic: 'https://via.placeholder.com/50',
    bookImages: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
    description: 'Hace 1 día compartió su última actividad',
    likes: 100,
    comments: 100,
  },
  {
    id: '2',
    username: 'Placeholder 2',
    profilePic: 'https://via.placeholder.com/50',
    bookImages: ['https://via.placeholder.com/150'],
    description: 'Terminó de leer y está reflexionando',
    likes: 50,
    comments: 10,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Racha de lectura */}
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>1 Día de racha</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Sigue el progreso</Text>
        </View>
      </View>

      {/* Lista de publicaciones */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {/* Información del usuario */}
            <View style={styles.userInfo}>
              <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
              <View>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>

            {/* Imágenes de libros */}
            <View style={styles.bookImagesContainer}>
              {item.bookImages.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={styles.bookImage} />
              ))}
            </View>

            {/* Acciones (likes y comentarios) */}
            <View style={styles.actionsContainer}>
              <Text style={styles.action}>❤️ {item.likes}</Text>
              <Text style={styles.action}>💬 {item.comments}</Text>
              <Text style={styles.action}>🔗</Text>
            </View>
          </View>
        )}
      />

      {/* Botón flotante de agregar */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  streakContainer: {
    backgroundColor: '#2d98da',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  streakText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  progressText: {
    color: '#2d98da',
  },
  postContainer: {
    backgroundColor: '#3c6382',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#d1d8e0',
  },
  bookImagesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginRight: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  action: {
    fontSize: 16,
    color: '#fff',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#38ada9',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  floatingButtonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Home;
