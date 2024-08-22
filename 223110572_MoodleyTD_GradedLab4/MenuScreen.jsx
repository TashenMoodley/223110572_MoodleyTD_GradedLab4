import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import CartScreen from './CartScreen'
import { useFood } from './Navigation'



export default function MenuScreen() {

    const { food, addQuantity } = useFood()


  return (
    
    <SafeAreaView style={styles.container}>

        {/* Displaying Food Menu Items */}
        <FlatList
        keyExtractor={(item) => item.id}
        data={food}
        renderItem={( { item } ) => (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.price}>R{item.price}</Text>
                    <Image style={styles.images} source={item.image}/>
                    <Text style={styles.foodDesc}>{item.description} {'\n'}</Text>
                    <Pressable style={styles.addToCart}>
                        <Button title='Add to Cart' color={'#0F52BA'} onPress={() => addQuantity(item.id)}></Button>
                    </Pressable>
                </View>
                
            </View>
        )}
        />
    </SafeAreaView>        
       
  )
}

// StyleSheet
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
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
        marginBottom: 5,
    }
})