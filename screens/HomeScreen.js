import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import tracksList from './../assets/tracksList'

const HomeScreen = ({ navigation }) => {
  const trackNames = useMemo(() => tracksList.map(track => track.title), []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Все названия треков</Text>
      {trackNames.map((trackName, index) => (
        <Text key={index}>{trackName}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;