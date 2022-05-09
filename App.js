import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilmsScreenContainer from "./src/containers/films-screens-container";
import TodoScreenContainer from "./src/containers/todo-screen-container";

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
          <Tab.Screen name="Todo App" component={TodoScreenContainer} />
          <Tab.Screen name="Film Catalog" component={FilmsScreenContainer} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


