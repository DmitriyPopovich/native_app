import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import { StatusBar } from 'expo-status-bar';
import {TodoScreen} from './src/screens/todo/TodoScreen'
import {FilmsScreen} from './src/screens/films/'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={{
            tabBarAllowFontScaling: true,
            tabBarLabelStyle: {
              fontSize: 22
            },
            tabBarIcon: () => {return},
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
        }}
        >
          <Tab.Screen name="Todo App" component={TodoScreen} />
          <Tab.Screen name="Film Catalog" component={FilmsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


