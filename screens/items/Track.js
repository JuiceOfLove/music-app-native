import React, { useContext, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AudioContext } from './AudioContext';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import secondsToMMSS from './secondsToMMSS';
import styles from './trackStyles';

const Track = memo(({ id, src, preview, title, artists, duration }) => {
  const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext);
  const isCurrentTrack = currentTrack.id === id;
  const formattedDuration = secondsToMMSS(duration) || '00:00';

  return (
    <TouchableOpacity
      style={[styles.track, isCurrentTrack && styles.playing]}
      onPress={() => handleToggleAudio({ id, src, preview, title, artists, duration })}
    >
      <IconButton>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image source={{ uri: preview }} style={styles.preview} />
      <View style={styles.credits}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          {'\n'}
          <Text>{artists}</Text>
        </Text>
      </View>
      <Text>{formattedDuration}</Text>
    </TouchableOpacity>
  );
});

export default Track;