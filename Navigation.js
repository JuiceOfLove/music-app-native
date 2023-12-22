import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';
import PlaylistsScreen from './screens/PlaylistsScreen';
import LibraryScreen from './screens/LibraryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerContent from './screens/DrawerContent';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Музыка" component={MusicPlayerScreen} />
    <Tab.Screen name="Плейлист" component={PlaylistsScreen} />
    <Tab.Screen name="Библиотека" component={LibraryScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Главная" drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Music" component={AppTabs} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}