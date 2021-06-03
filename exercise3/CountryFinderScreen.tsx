import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, NativeModules, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CountryItem} from './CountryItem';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { StackParamList } from './App';
import { useNavigation } from '@react-navigation/core';

export interface Country {
  name: string;
  capital: string;
  population: number;
}

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Master'>

export const CountryFinderScreen = () => {
  const [countries, setCountries] = useState<Array<Country>>([])
  const [filter, setFilter] = useState('')
  const navigation = useNavigation<NavigationProp>()
  const fetchCountries = async () => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${filter}`)
    const countries: Array<Country> = response.data
    setCountries(countries)
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={(text) => setFilter(text)}></TextInput>
          <Pressable 
            style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#AEAEAE' : '#333333'}]}
            onPress={fetchCountries}
          ><Text style={styles.buttonText}>FIND IT!</Text></Pressable>
        </View>
        <FlatList 
          data={countries}
          renderItem={({ item }) => (<CountryItem country={item} />)}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  textInput: { 
    flex: 8,
    height: 40, 
    borderWidth: 1,
    borderRadius: 6,
  },
  button: { 
    flex: 2, 
    justifyContent: 'center',
    borderRadius: 8, 
    padding: 6, 
  },
  buttonText: { 
    color: 'white',
    textAlign: 'center',
  }
})