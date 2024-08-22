import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { formContext } from '../App'
import UserDetails from './UserDetails'


export default function PaymentDetails( { navigation }) {

  const { paymentDetails, setPaymentDetails } = useContext(formContext)
  const [cardNum, setCardNum] = useState(paymentDetails.cardNum)
  const [expDate, setExpDate] = useState(paymentDetails.expDate)
  const [cvv, setCVV] = useState(paymentDetails.cvv)
  const [valid, setValid] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validateForm()
  }, [cardNum, expDate, cvv])

  // Validate Payment Form Information
  const validateForm = () => {
    const errors = {}

    if(!cardNum){errors.cardNum = 'Card Number Required'}
    else if(cardNum.length > 16 || cardNum.length < 16){errors.cardNum = 'Card Number must be 16 characters long'}

    if(!expDate){errors.expDate = 'Expiry Date Required'}
    else if(expDate.length < 7 || expDate.length > 7){errors.expDate = 'Expiry Date Invalid (MM/YYYY)'}

    if(!cvv){errors.cvv = 'CVV Required'}
    else if(cvv.length < 3 || cvv.length > 3){errors.cvv = 'CVV Invalid(3 numbers at the back of the credit card)'}

    setErrors(errors)
    setValid(Object.keys(errors).length === 0)
  }

  const handleSubmit = () => {
    if(valid)
    {
      setPaymentDetails({ cardNum, expDate, cvv })
      navigation.navigate('Navigation')
    }
    else{
      console.log('Invalid')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paymentDetailForm}>
        
        <Text>Card Number:</Text>
        <TextInput placeholder='Enter card number...' value={cardNum} style={styles.inputBox} onChangeText={setCardNum}></TextInput><Text/>
        <Text>Expiry Date:</Text>
        <TextInput placeholder='Enter expiry date (MM/YYYY)...' value={expDate}  style={styles.inputBox} onChangeText={setExpDate}></TextInput><Text/>
        <Text>CVV:</Text>
        <TextInput placeholder='Enter cvv...' value={cvv} style={styles.inputBox} onChangeText={setCVV}></TextInput><Text/>

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