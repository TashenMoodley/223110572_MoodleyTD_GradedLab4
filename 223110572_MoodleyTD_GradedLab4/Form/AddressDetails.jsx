import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { formContext } from '../App'


export default function AddressDetails( { navigation }) {

  const { addressDetails, setAddressDetails } = useContext(formContext)
  const [address, setAddress] = useState(addressDetails.address)
  const [city, setCity] = useState(addressDetails.city)
  const [state, setState] = useState(addressDetails.state)
  const [zip, setZip] = useState(addressDetails.zip)
  const [valid, setValid] = useState(false)
  const [errors, setErrors] = useState({})

  // Validate Form when entering details
  useEffect(() => {
    validateForm()
  }, [address, city, state, zip])

  // Validate Address Details
  const validateForm = () => {
    const errors = {}

    if(!address){errors.address = 'Address Required'}
    if(!city){errors.city = 'City Required'}
    if(!state){errors.state = 'State Required'}
    if(!zip){errors.zip = 'Zip Required'}

    setErrors(errors)
    setValid(Object.keys(errors).length === 0)
  }

  const handleSubmit = () => {
    if(valid)
    {
      setAddressDetails({ address, city, state, zip })
      navigation.navigate('PaymentDetails')
    }
    else{
      console.log('Invalid')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetailForm}>

        <Text>Address:</Text>
        <TextInput placeholder='Enter address...' value={address} style={styles.inputBox} onChangeText={setAddress}></TextInput><Text/>
        <Text>City:</Text>
        <TextInput placeholder='Enter city...' value={city}  style={styles.inputBox} onChangeText={setCity}></TextInput><Text/>
        <Text>State:</Text>
        <TextInput placeholder='Enter state...' value={state} style={styles.inputBox} onChangeText={setState}></TextInput><Text/>
        <Text>ZIP:</Text>
        <TextInput placeholder='Enter zip...' value={zip} style={styles.inputBox} onChangeText={setZip}></TextInput><Text/>

        <Pressable>
          <Button title='Continue' color={'#0F52BA'} onPress={handleSubmit} disabled={!valid}></Button>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

// StyleSheet
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    inputBox:{
      borderWidth: 1,
      height: 40,
      width: 'auto',
    },
})