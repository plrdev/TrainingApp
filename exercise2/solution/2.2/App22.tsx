import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {CountryItem} from './CountryItem';

export interface Country {
  name: string;
  capital: string;
  population: number;
}

const App = () => {
  const [countries, setCountries] = useState<Array<Country>>([])
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      const countries = response.data
      setCountries(countries)
    }
    fetchCountries()
  }, [])
  return (
    <SafeAreaView>
      <FlatList 
        data={countries}
        renderItem={({ item }) => (<CountryItem country={item} />)}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default App;
