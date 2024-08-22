import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet } from 'react-native'
import Navigation from './Navigation';
import FormNavigation from './Form/FormNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useState } from 'react'

const Stack = createStackNavigator()

// Context from Forms
export const formContext = createContext()

export default function App() {

  const [userDetails, setUserDetails] = useState({})
  const [addressDetails, setAddressDetails] = useState({})
  const [paymentDetails, setPaymentDetails] = useState({})


  return (
    <formContext.Provider value={{userDetails, setUserDetails, addressDetails, setAddressDetails, paymentDetails, setPaymentDetails}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FormNavigation'>
          <Stack.Screen name='FormNavigation' component={FormNavigation} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='Navigation' component={Navigation} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </formContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
