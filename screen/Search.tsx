import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Libros, Personas, Clubes, etc..."
          placeholderTextColor="#7f8fa6"
          style={styles.searchInput}
        />
      </View>

      {/* Contenido */}
      <View style={styles.contentContainer}>
        <View style={styles.card} />
      </View>
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
  searchContainer: {
    backgroundColor: '#1e5f74',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchInput: {
    color: '#fff',
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: '#1e5f74',
    borderRadius: 10,
    height: 100,
    padding: 10,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#0c4b70',
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

export default Search;
