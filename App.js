import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMusic from './component/Screens/ListMusic';
import { createStackNavigator } from '@react-navigation/stack';

import Pleer from './component/Screens/Pleer';

const Stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="List"
          component={ListMusic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pleer"
          component={Pleer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
