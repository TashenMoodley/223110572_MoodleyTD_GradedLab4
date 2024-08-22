import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { formContext } from './App'

export default function ProfileScreen() {

  const { userDetails, addressDetails, paymentDetails } = useContext(formContext)

  return (
    <SafeAreaView style={styles.container}>

      {/* Profile Details */}
      <ScrollView style={styles.profileContainer}>
  
        <View style={styles.userDetails}>

          <Text style={styles.profileHeading}>Profile Details:</Text><Text/>

          <Text style={styles.profileLabels}>Name:</Text>
          <Text style={styles.profileText}> {userDetails.name}</Text>

          <Text style={styles.profileLabels}>Email:</Text>
          <Text style={styles.profileText}>{userDetails.email}</Text>

          <Text style={styles.profileLabels}>Phone Number:</Text>
          <Text style={styles.profileText}>{userDetails.phoneNum}</Text>

          <Text/>
        </View>


        {/* Address Details */}
        <View style={styles.addressDetails}>

          <Text style={styles.addressHeading}>Address Details:</Text><Text/>

          <Text style={styles.addressLabels}>Address:</Text>
          <Text style={styles.addressText}> {addressDetails.address}</Text>

          <Text style={styles.addressLabels}>City:</Text>
          <Text style={styles.addressText}> {addressDetails.city}</Text>

          <Text style={styles.addressLabels}>State:</Text>
          <Text style={styles.addressText}> {addressDetails.state}</Text>

          <Text style={styles.addressLabels}>ZIP:</Text>
          <Text style={styles.addressText}> {addressDetails.zip}</Text>

          <Text/>
        </View>


        {/* Payment Details */}
        <View style={styles.paymentDetails}>

          <Text style={styles.paymentHeading}>Payment Details:</Text><Text/>

          <Text style={styles.paymentLabels}>Card Number:</Text> 
          <Text style={styles.paymentText}>{paymentDetails.cardNum}</Text>

          <Text style={styles.paymentLabels}>Expiry Date:</Text>
          <Text style={styles.paymentText}>{paymentDetails.expDate}</Text>

          <Text style={styles.paymentLabels}>CVV:</Text>
          <Text style={styles.paymentText}>{paymentDetails.cvv}</Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

// StyleSheet
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    profileContainer:{
      flex: 1,
    },

    labels:{
      fontSize: 16,
      fontWeight: '800',
    },

    // Profile
    profileLabels:{
      color: '#0F52BA',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
      width: 200,
      padding: 1,
    },

    profileHeading:{
      color: '#0F52BA',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
    },

    profileText:{
      color: 'white',
      fontWeight: 'bold'
    },

    // Address

    addressLabels:{
      color: 'black',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
      width: 200,
      padding: 1,
    },

    addressHeading:{
      color: 'black',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
    },

    addressText:{
      color: 'black',
      fontWeight: 'bold',
    },

    // Payment

    paymentLabels:{
      color: 'green',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
      width: 200,
    },

    paymentHeading:{
      color: 'green',
      fontSize: 16,
      fontWeight: '800',
      backgroundColor: 'white',
    },

    paymentText:{
      color: 'white',
      fontWeight: 'bold',
    },

    userDetails:{
      borderWidth: 1,
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: '#0F52BA',
    },

    addressDetails:{
      borderWidth: 1,
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: 'gold',
    },

    paymentDetails:{
      borderWidth: 1,
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: '#50C878',
    },
})