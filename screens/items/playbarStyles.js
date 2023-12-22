import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    playbar: {
      position: 'absolute',
      backgroundColor: 'lightgray',
      width: '100%',
      height: 70,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    preview: {
      width: 55,
      height: 55,
      borderRadius: 10,
    },
    credits: {
      color: 'white',
      flexDirection: 'column',
      gap: 4,
      letterSpacing: 2,
    },
    slider: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginLeft: 'auto',
    },
  });

export default styles;
