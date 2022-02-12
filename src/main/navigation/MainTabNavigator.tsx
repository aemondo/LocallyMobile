import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatScreen from '../../screen/ChatScreen';
import EventsScreen from '../../screen/EventsScreen';
import HomeScreen from '../../screen/HomeScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Chat' component={ChatScreen} />
      <Tab.Screen name='Events' component={EventsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
