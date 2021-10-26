import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({ navigation }) {
  //using navigation
  const pressHandler1 = () => {
    navigation.navigate('GroceryShoppingList')
  }
  const pressHandler2 = () => {
    navigation.navigate('RecipeLibrary')
  }

  //using android specifical component for the exit button
  const backAction = () => {
    Alert.alert('Hold on', 'Are you sure you want to exit?', [
      {
        text: 'No',
        onPress: () => null
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp()
      }
    ])
    return true
  }
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={pressHandler1}>
        <Text style={styles.btnText}>Write grocery shopping list</Text>
        <Icon name="arrow-right" style={styles.icon} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={pressHandler2}>
        <Text style={styles.btnText}>Recipe library</Text>
        <Icon name="arrow-right" style={styles.icon} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={backAction}>
        <Text style={styles.btnText}>Exit App</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'seashell'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'tan',
    height: 60
  },
  btnText: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 15,
    fontSize: 20
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'palegoldenrod',
    padding: 10,
    height: 160,
    margin: 25
  },
  icon: {
    color: 'mediumseagreen'
  }
})
