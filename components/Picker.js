import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function PickerForm() {
  const [shoppingAPPS, setshoppingAPPS] = useState('Willys')
  return (
    <View>
      <View>
        <Text style={styles.text}>Choose an APP to buy my ingridients</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Linking.openURL('https://www.willys.se/')
          }}
        >
          <Text style={styles.btnText}>Take me to {shoppingAPPS}</Text>
        </TouchableOpacity>
        <Picker
          style={styles.picker}
          selectedValue={shoppingAPPS}
          onValueChange={(currentshoppingAPPS) =>
            setshoppingAPPS(currentshoppingAPPS)
          }
        >
          <Picker.Item label="Willys" value="Willys" />
          <Picker.Item label="MatSE" value="MatSE" />
          <Picker.Item label="Coops" value="Coops" />
          <Picker.Item label="Hemkop" value="Hemkop" />
          <Picker.Item label="ICA" value="ICA" />
        </Picker>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    color: 'darkslateblue',
    backgroundColor: 'tan'
  },
  btn: {
    color: 'darkslateblue',
    backgroundColor: '#c7edd1',
    margin: 5,
    padding: 4
  },
  btnText: {
    textAlign: 'center'
  },
  picker: {
    marginHorizontal: 50,
    height: 60
  }
})
