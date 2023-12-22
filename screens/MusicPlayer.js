import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import tracksList from '../assets/tracksList';
import Track from './items/Track';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  search: {
    flex: 1,
  },
  input: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    color: '#9e9e9e',
    padding: 14,
    fontSize: 18,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    flex: 1,
    margin: 10,
    maxHeight: '100%',
    padding: 15,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 20,
  },
});


const runSearch = (tracks, query) => {
  if (!query) {
    return tracks;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MusicPlayer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState(tracksList);

  const handleChange = (text) => {
    setSearchQuery(text);
    const foundTracks = runSearch(tracksList, text);
    setFilteredTracks(foundTracks);
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder="Поиск треков"
        onChangeText={handleChange}
        value={searchQuery}
      />
      <FlatList
        data={filteredTracks}
        keyExtractor={(track) => track.id.toString()}
        renderItem={({ item }) => <Track {...item} />}
      />
    </View>
  );
};

export default MusicPlayer;
