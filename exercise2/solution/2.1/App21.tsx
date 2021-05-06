import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CountryItem} from './CountryItem212';

export interface Country {
  name: string;
  capital: string;
  population: number;
}

const country: Country = {
  name: 'Finland',
  capital: 'Helsinki',
  population: 5540720,
};

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <CountryItem country={country} />
      </View>
    </SafeAreaView>
  );
};

export default App;
