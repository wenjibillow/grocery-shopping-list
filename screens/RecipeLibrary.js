import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, FlatList, Alert, ScrollView, View } from 'react-native'

import Header from '../components/Header'
import Recipes from '../components/Recipes'

export default function RecipeLibrary() {
  return (
    <View style={styles.container}>
      <Header title="Recipe Library" />
      <Recipes />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
