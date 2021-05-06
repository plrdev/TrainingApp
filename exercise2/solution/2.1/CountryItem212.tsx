import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Country } from './App21';

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  const { name, capital, population } = country;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {country.name}</Text>
      <Text>Capital: {country.capital}</Text>
      <Text>Population: {country.population}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15, 
    borderWidth: 1, 
    padding: 5, 
    backgroundColor: '#EEEEEE'
  },
  title: {
    fontSize: 16, 
    color: '#0E0EAE', 
    fontWeight: 'bold', 
    marginBottom: 5
  }
})