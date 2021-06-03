import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack';
import { Country, StackParamList } from './App';

interface CountryItemProps {
  country: Country;
}
type NavigationProp = NativeStackNavigationProp<StackParamList, 'Master'>

export const CountryItem = ({ country }: CountryItemProps) => {
  const { name, capital, population } = country;
  const navigation = useNavigation<NavigationProp>()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Details', { name: country.name })
      }}>
        <Text style={styles.title}>Name: {country.name}</Text>
        <Text>Capital: {country.capital}</Text>
        <Text>Population: {country.population}</Text>
      </TouchableOpacity>
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