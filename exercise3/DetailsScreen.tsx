import { RouteProp, useRoute } from '@react-navigation/core'
import React from 'react'
import { Text } from 'react-native'
import { StackParamList } from './App'

type DetailsRouteProp = RouteProp<StackParamList, 'Details'>

export const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>()
  const { name } = route.params
  return (
    <Text>Details: { name }</Text>
  )
}