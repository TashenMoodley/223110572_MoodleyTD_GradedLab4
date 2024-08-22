import { SafeAreaView, View, Text, ScrollView, FlatList, Button, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuScreen from './MenuScreen'
import CartScreen from './CartScreen'
import ProfileScreen from './ProfileScreen'
import UserDetails from './Form/UserDetails'
import AddressDetails from './Form/AddressDetails'
import PaymentDetails from './Form/PaymentDetails'
import FormNavigation from './Form/FormNavigation'


// Food Data Context
export const foodContext = createContext()

const FoodProvider = ({ children }) => {

    // Food Menu Items
    const [food, setFood] = useState([
        
      // Item 1: Pasta
      {
          id: 0,
          name: 'Macaroni and Cheese',
          image: require('./Images/MenuScreen/Mac_N_Cheese.jpg'),
          description: 'A classic macaroni with cheese sauce and a number of cheeses added to it',
          price: 120,
          quantity: 0,
          total: 0,
      },

      // Item 2: Pizza
      {
          id: 1,
          name: 'Pepperoni Pizza',
          image: require('./Images/MenuScreen/Pepperoni_Pizza.jpg'),
          description: 'A cheesy delicious pepperoni pizza made in our oven',
          price: 130,
          quantity: 0,
          total: 0,
      },

      // Item 3: Salad
      {
          id: 2,
          name: 'Caesar Salad',
          image: require('./Images/MenuScreen/Caesar_Salad.jpg'),
          description: 'A classic Caesar Salad with fresh lettuce and croutons, glazed in a balsalmic reduction and olive oil',
          price: 100,
          quantity: 0,
          total: 0,
      },

      // Item 4: Burger
      {
          id: 3,
          name: 'Cheese Burger',
          image: require('./Images/MenuScreen/Cheese_Burger.jpg'),
          description: 'A thick and juicy beef patty cooked to perfection with melted cheese on top and placed inbetween two toasted buns, pickles, and our homemade burger sauce',
          price: 98,
          quantity: 0,
          total: 0,
      },

      // Item 5: Dessert
      {
          id: 4,
          name: 'Unbaked Cheesecake',
          image: require('./Images/MenuScreen/Unbaked_Cheesecake.jpg'),
          description: 'A soft and sweet fridge cheesecake with our homemade berry sauce and topped with fresh black berries or strawberries',
          price: 112,
          quantity: 0,
          total: 0,
      },

      // Item 6:  Drink/Cocktail
      {
          id: 5,
          name: 'Bloody Mary',
          image: require('./Images/MenuScreen/Bloody_Mary.jpg'),
          description: 'A tomatoe cocktail served with a slice of lemon and ice',
          price: 32,
          quantity: 0,
          total: 0,
      },

    ])

   // Update quantity and food item total when button is pressed
   const addQuantity = (id) => {
    setFood((prevFood) => 
        prevFood.map((item) => item.id === id ? {...item, quantity: item.quantity + 1, total: item.price * (item.quantity + 1)} : item)
    )
  }

  // Decrease Quantity when minus button is pressed in CartScreen.jsx
  const minusQuantity = (id) => {
    setFood((prevFood) => 
      prevFood.map((item) => item.id === id ? {...item, quantity: item.quantity - 1, total: item.price * (item.quantity - 1)} : item)
    )
  }

  // Clear cart
  const clearCart = () => {
    setFood((prevFood) => 
      prevFood.map((item) => ({...item, quantity: 0, total: 0,}))
    )
  }


  // Return food context with information
  return(
    <foodContext.Provider value={{ food, addQuantity, minusQuantity, clearCart}}>
      {children}
    </foodContext.Provider>
  );
}

// Use Food context
const useFood = () => useContext(foodContext)

export { FoodProvider, useFood }


export default function Navigation() {

    const Tab = createBottomTabNavigator()

  return (
    
      <FoodProvider>
        <Tab.Navigator>
            <Tab.Screen name='MenuScreen' component={MenuScreen}></Tab.Screen>
            <Tab.Screen name='CartScreen' component={CartScreen}></Tab.Screen>
            <Tab.Screen name='ProfileScreen' component={ProfileScreen}></Tab.Screen>
        </Tab.Navigator>
      </FoodProvider>  
  )
}