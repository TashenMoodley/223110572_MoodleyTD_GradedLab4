import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { useFood } from './Navigation'

export default function CartScreen() {

  // Use food context
  const { food, addQuantity, minusQuantity, clearCart } = useFood()

  // Filter items by quantity
  const cartItems = food.filter(item => item.quantity > 0)

  // Get full total from each total from each food item 
  const fullTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.total, 0)
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        keyExtractor={(item) => item.id}
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.price}>R{item.price}</Text>
                <Image style={styles.images} source={item.image}/>
                <Text style={styles.foodDesc}>Description: {item.description} {'\n'}</Text>
                <Text style={styles.foodDesc}>{'\t\t\t\t'}Quantity: {item.quantity} {'\n----------------------'}</Text>
                <Pressable style={styles.btn}>
                  <Button title='+' color={'#0F52BA'} onPress={() => addQuantity(item.id)}></Button>
                  <Button title='-' color={'#EC5800'} onPress={() => minusQuantity(item.id)}></Button>
                </Pressable>
            </View>
              
              
            </View>
        )}

          ListFooterComponent={
            <View style={styles.FullTotal}>
              <Text style={styles.displayTotal}>Total: R{fullTotal()}</Text>
              <Pressable>
                <Button title='Checkout' color={'#00A36C'} onPress={clearCart}></Button>
              </Pressable>
            </View>
          }
        />
    </SafeAreaView>
  )
}

// StyleSheet
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
    },

    btn:{
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    card:{
      flex: 1,
      borderWidth: 3,
      padding: 3,
      backgroundColor: 'gold',

  },

    images:{
      width: 'auto',
      height: 200,
  },

  foodName:{ 
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: '#0F52BA',
    color: 'white'
  },

  foodDesc:{
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  price:{
      fontWeight: '600',
  },

  addToCart:{
      width: 100,
      display: 'flex',
      padding: 'auto',
      marginLeft: 250,
      borderRadius: 10,
  },

  FullTotal:{
    flex: 1,
    padding: 10,
  },

  displayTotal:{
    fontSize: 20,
    fontWeight: 'bold',
  },

})