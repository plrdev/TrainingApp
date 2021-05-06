import React from 'react';
import { Text, View } from 'react-native';
import { Country } from './App21';

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  const { name, capital, population } = country;
  return (
    <View>
      <Text>Name: {country.name}</Text>
      <Text>Capital: {country.capital}</Text>
      <Text>Population: {country.population}</Text>
    </View>
  );
};
