import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import UserDetails from './UserDetails'
import AddressDetails from './AddressDetails'
import PaymentDetails from './PaymentDetails'

const Stack = createStackNavigator()

export default function FormNavigation() {
  return (

    <Stack.Navigator initialRouteName='UserDetails'>
        <Stack.Screen name='UserDetails' component={UserDetails}></Stack.Screen>
        <Stack.Screen name='AddressDetails' component={AddressDetails}></Stack.Screen>
        <Stack.Screen name='PaymentDetails' component={PaymentDetails}></Stack.Screen>
    </Stack.Navigator>

  )
}