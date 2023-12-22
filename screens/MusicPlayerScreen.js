import React, { useRef, useLayoutEffect } from 'react';
import AudioProvider from './items/AudioContext';
import { View } from 'react-native';
import MusicPlayer from './MusicPlayer';
import Playbar from './items/Playbar';

const MusicPlayerScreen = () => {
  const playbarRef = useRef();

  useLayoutEffect(() => {
    if (playbarRef.current) {
      console.log('Playbar height:', playbarRef.current.clientHeight);
    }
  }, [playbarRef]);

  return (
    <AudioProvider>
      <View style={{ flex: 1 }}>
        <MusicPlayer />
        <Playbar ref={playbarRef} />
      </View>
    </AudioProvider>
  );
};

export default MusicPlayerScreen;