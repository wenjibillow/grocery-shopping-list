import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, FlatList, Alert, View, SafeAreaView } from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import AddItem from '../components/AddItem'
import Picker from '../components/Picker'

export default function GroceryShoppingList() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Egg' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' },
    { id: uuidv4(), text: 'Salad' }
  ])

  const deleteItem = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id != id)
    })
  }

  const addItem = (text) => {
    !text
      ? Alert.alert(
          'No item entered',
          'Please enter an item',
          [
            {
              text: 'ok',
              style: 'cancel'
            }
          ],
          { cancelable: true }
        )
      : setItems((currentItems) => {
          return [{ id: uuidv4(), text }, ...currentItems]
        })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Grocery Shopping List" />
      <AddItem addItem={addItem} />
      <View style={styles.shoppingList}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
      <Picker />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
