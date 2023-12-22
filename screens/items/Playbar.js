import React, { forwardRef, useContext, useState, useEffect, useImperativeHandle, useDebugValue } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { AudioContext } from './AudioContext';
import { PlayArrow, Pause } from '@mui/icons-material';
import secondsToMMSS from './secondsToMMSS';
import styles from './playbarStyles.js';

const TimeControls = () => {
    const { audio, currentTrack, isPlaying } = useContext(AudioContext);
    const { duration } = currentTrack;
    const [currentTime, setCurrentTime] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);

    const formattedCurrentTime = secondsToMMSS(currentTime) || '00:00' ;

    const handleChangeCurrentTime = (value) => {
      setCurrentTime(value);
    };

    const handleChangeCommitted = (value) => {
      const time = Math.round((value / 100) * duration);
      setCurrentTime(time);
      setIsSeeking(false);
      audio.currentTime = time;
    };

    const handleSlidingStart = () => {
      setIsSeeking(true);
    };

    useEffect(() => {
      const timeInterval = setInterval(() => {
        if (!isSeeking) {
          setCurrentTime(audio.currentTime);
        }
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }, [audio, isSeeking]);

    return (
      <>
        <Text>{formattedCurrentTime}</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={duration}
          value={isSeeking ? currentTime : audio.currentTime}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#000000"
          thumbStyle={{ width: 20, height: 20, borderRadius: 10 }}
          onValueChange={handleChangeCurrentTime}
          onSlidingComplete={handleChangeCommitted}
          onSlidingStart={handleSlidingStart}
        />
      </>
    );
  };


  const Playbar = forwardRef((props, ref) => {
    const { currentTrack, handleToggleAudio, isPlaying } = useContext(AudioContext);
    const { title, artists, preview, duration } = currentTrack;
    const formattedDuration = secondsToMMSS(duration) || '00:00';

    const [playbarHeight, setPlaybarHeight] = useState(0);

    useImperativeHandle(ref, () => ({
      getPlaybarHeight: () => playbarHeight,
    }), [playbarHeight]);

    useEffect(() => {
      console.log('Playbar height:', playbarHeight);
    }, [playbarHeight]);

    useDebugValue(`Playbar: ${title}`);

    return (
      <View
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setPlaybarHeight(height);
        }}
        style={styles.playbar}
      >
        <Image source={{ uri: preview }} style={styles.preview} />
        <TouchableOpacity onPress={() => handleToggleAudio(currentTrack)}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </TouchableOpacity>
        <View style={styles.credits}>
          <Text style={styles.title}>{title}</Text>
          <Text>{artists}</Text>
        </View>
        <View style={styles.slider}>
          <TimeControls />
          <Text>{formattedDuration}</Text>
        </View>
      </View>
    );
  });

  export default Playbar;