import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CountryItem} from './CountryItem';

export interface Country {
  name: string;
  capital: string;
  population: number;
}

const App = () => {
  const [countries, setCountries] = useState<Array<Country>>([])
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>([])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      const countries: Array<Country> = response.data
      setCountries(countries)
      setFilteredCountries(countries)
    }
    fetchCountries()
  }, [])
  const filterCountries = () => {
    const filteredCountries = countries.filter((country) => country.name.includes(filter))
    setFilteredCountries(filteredCountries)
  }
  return (
    <SafeAreaView>
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={(text) => setFilter(text)}></TextInput>
          <Pressable 
            style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#AEAEAE' : '#333333'}]}
            onPress={filterCountries}
          ><Text style={styles.buttonText}>Filter</Text></Pressable>
        </View>
        <FlatList 
          data={filteredCountries}
          renderItem={({ item }) => (<CountryItem country={item} />)}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  textInput: { 
    borderWidth: 1, 
    height: 40, 
    flex: 9
  },
  button: { 
    flex: 1, 
    justifyContent: 'center', 
    borderRadius: 8, 
    padding: 6 
  },
  buttonText: { 
    color: 'white',
    textAlign: 'center' 
  }
})