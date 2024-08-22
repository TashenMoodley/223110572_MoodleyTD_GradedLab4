import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { formContext } from '../App'

export default function UserDetails( { navigation }) {

  const { userDetails, setUserDetails } = useContext(formContext)
  const [name, setName] = useState(userDetails.name)
  const [email, setEmail] = useState(userDetails.email)
  const [phoneNum, setPhoneNum] = useState(userDetails.phoneNum)
  const [valid, setValid] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validateForm()
  }, [name, email, phoneNum])

  const validateForm = () => {
    const errors = {}

    if(!name){errors.name = 'Name is required'}

    if(!email){errors.email = 'Email is required'}
    else if(!/\S+@\S+\.\S+/.test(email)) {errors.email = 'Invalid Email'}

    if(!phoneNum){errors.phoneNum = 'Phone Number is required'}
    else if(phoneNum.length < 10 || phoneNum.length > 10){errors.phoneNum = 'Invalid Phone Number(Max of 10)'}

    setErrors(errors)
    setValid(Object.keys(errors).length === 0)

  }

  const handleSubmit = () => {
    if(valid)
    {
      setUserDetails({ name, email, phoneNum })
      navigation.navigate('AddressDetails')
    }
    else{
      console.log('Invalid')
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetailForm}>

        <Text>Name:</Text>
        <TextInput placeholder='Enter name...' value={name} style={styles.inputBox} onChangeText={setName}></TextInput><Text/>
        <Text>Email:</Text>
        <TextInput placeholder='Enter email...' value={email}  style={styles.inputBox} onChangeText={setEmail}></TextInput><Text/>
        <Text>Phone Number:</Text>
        <TextInput placeholder='Enter phone number...' value={phoneNum} style={styles.inputBox} onChangeText={setPhoneNum}></TextInput><Text/>

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