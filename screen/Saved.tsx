// SavedBooksScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const books = [
  { id: '1', image: require('../assets/id_1.jpg') },
  { id: '2', image: require('../assets/id_2.jpg') },
  { id: '3', image: require('../assets/id_3.jpg') },
  { id: '4', image: require('../assets/id_4.jpg') },
  // Repite los libros para llenar la lista
  { id: '5', image: require('../assets/id_5.jpg') },
  { id: '6', image: require('../assets/id_6.jpg') },
  { id: '7', image: require('../assets/id_1.jpg') },
  { id: '8', image: require('../assets/id_2.jpg') },
  // Agrega más libros si es necesario
];

const Saved = () => {
  const renderBook = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.image} style={styles.bookImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.header}>Bookify</Text>

      {/* Título de la página */}
      <Text style={styles.pageTitle}>Salvados</Text>

      {/* Lista de libros */}
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a3d62',
    textAlign: 'center',
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  bookContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  bookImage: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default Saved;
