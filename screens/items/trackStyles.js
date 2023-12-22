import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  playing: {
    backgroundColor: '#e6e6e6',
  },
  preview: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  credits: {
    flex: 1,
    marginRight: 10,
  },
});

export default styles;