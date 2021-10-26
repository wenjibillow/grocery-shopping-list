import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'tan'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
})
