
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';

const popularBooks = [
  { id: '1', title: 'One Piece', cover: require('../assets/id_1.jpg') },
  { id: '2', title: 'Naruto', cover: require('../assets/id_2.jpg') },
  { id: '3', title: 'Bleach', cover: require('../assets/id_3.jpg') },
  { id: '4', title: 'Goodbye Eri', cover: require('../assets/id_4.jpg') },
  { id: '5', title: 'Jujutsu Kaisen', cover: require('../assets/id_5.jpg') },
  { id: '6', title: 'Tokyo Ghoul', cover: require('../assets/id_6.jpg') },
];

const novedadesBooks = [
  { id: '1', title: 'One Piece', cover: require('../assets/id_1.jpg') },
  { id: '2', title: 'Naruto', cover: require('../assets/id_2.jpg') },
  { id: '3', title: 'Bleach', cover: require('../assets/id_3.jpg') },
  { id: '4', title: 'Goodbye Eri', cover: require('../assets/id_4.jpg') },
  { id: '5', title: 'Jujutsu Kaisen', cover: require('../assets/id_5.jpg') },
  { id: '6', title: 'Tokyo Ghoul', cover: require('../assets/id_6.jpg') },
];

const mejoresResenasBooks = [
  { id: '1', title: 'One Piece', cover: require('../assets/id_1.jpg') },
  { id: '2', title: 'Naruto', cover: require('../assets/id_2.jpg') },
  { id: '3', title: 'Bleach', cover: require('../assets/id_3.jpg') },
  { id: '4', title: 'Goodbye Eri', cover: require('../assets/id_4.jpg') },
  { id: '5', title: 'Jujutsu Kaisen', cover: require('../assets/id_5.jpg') },
  { id: '6', title: 'Tokyo Ghoul', cover: require('../assets/id_6.jpg') },
];

// Componente para renderizar cada libro
const BookItem = ({ cover }: {  cover: any }) => (
  <View style={styles.bookItem}>
    <Image source={cover} style={styles.bookCover} />
  </View>
);

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Popular este Mes</Text>
      <FlatList
        horizontal
        data={popularBooks}
        renderItem={({ item }) => <BookItem cover={item.cover} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Novedades</Text>
      <FlatList
        horizontal
        data={novedadesBooks}
        renderItem={({ item }) => <BookItem cover={item.cover} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Mejores Reseñas</Text>
      <FlatList
        horizontal
        data={mejoresResenasBooks}
        renderItem={({ item }) => <BookItem cover={item.cover} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  bookCover: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
});

export default Home;
