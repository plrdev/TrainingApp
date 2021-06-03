import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CountryItem} from './CountryItem';

import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { CountryFinderScreen } from './CountryFinderScreen';
import { DetailsScreen } from './DetailsScreen';

export interface Country {
  name: string;
  capital: string;
  population: number;
}
enableScreens()

export type StackParamList = {
  Master: undefined
  Details: { name: string }
}

const Stack = createNativeStackNavigator<StackParamList>();


export const App = () => {
   return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Master" component={CountryFinderScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
   </NavigationContainer>)
};

