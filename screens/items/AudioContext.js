import React, { createContext, useState, useRef, useEffect, useReducer, useCallback } from 'react';
import tracksList from '../../assets/tracksList';

const defaultTrack = tracksList[0];

export const AudioContext = createContext();

const audioReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return { ...state, currentTrack: action.payload };
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    default:
      return state;
  }
};

const AudioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(audioReducer, {
    currentTrack: defaultTrack,
    isPlaying: false,
  });
  const audio = useRef(new Audio());

  useEffect(() => {
    const initAudio = async () => {
      audio.current.src = defaultTrack.src;
      dispatch({ type: 'SET_CURRENT_TRACK', payload: defaultTrack });
    };

    initAudio();

    return () => {
      audio.current.pause();
    };
  }, []);

  const handleToggleAudio = useCallback(async (track) => {
    const { currentTrack, isPlaying } = state;

    if (currentTrack.id !== track.id) {
      dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
      dispatch({ type: 'TOGGLE_PLAY' });
      audio.current.src = track.src;
      await audio.current.play();
    } else {
      if (isPlaying) {
        await audio.current.pause();
      } else {
        await audio.current.play();
      }
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  }, [state]);

  const value = { audio: audio.current, ...state, handleToggleAudio };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioProvider;