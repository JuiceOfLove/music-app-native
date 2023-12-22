import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Главная"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Музыка"
        onPress={() => props.navigation.navigate('Music')}
      />
      <DrawerItem
        label="Профиль"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Настройки"
        onPress={() => props.navigation.navigate('Settings')}
      />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {

        }}
        style={{
          padding: 16,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}
      >
        <Text>Информация</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;