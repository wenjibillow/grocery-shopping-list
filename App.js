//import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
// import {
//   StyleSheet,
//   View,
//   FlatList,
//   Alert,
//   ScrollView,
//   SafeAreaView
// } from 'react-native'
// import { v4 as uuidv4 } from 'uuid'
// import Header from './components/Header'
// import ListItem from './components/ListItem'
// import AddItem from './components/AddItem'
//import LandingPage from './components/LandingPage'
import Navigator from './routes/homeStack'

export default function App() {
  return <Navigator />
}

// export default function App() {
//   const [items, setItems] = useState([
//     { id: uuidv4(), text: 'Milk' },
//     { id: uuidv4(), text: 'Egg' },
//     { id: uuidv4(), text: 'Bread' },
//     { id: uuidv4(), text: 'Juice' },
//     { id: uuidv4(), text: 'Salad' }
//   ])

//   const deleteItem = (id) => {
//     setItems((currentItems) => {
//       return currentItems.filter((item) => item.id != id)
//     })
//   }

//   const addItem = (text) => {
//     !text
//       ? Alert.alert(
//           'No item entered',
//           'Please enter an item',
//           [
//             {
//               text: 'ok',
//               style: 'cancel'
//             }
//           ],
//           { cancelable: true }
//         )
//       : setItems((currentItems) => {
//           return [{ id: uuidv4(), text }, ...currentItems]
//         })
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.landingPage}>
//         <LandingPage />
//       </View>
//       <SafeAreaView style={styles.shoppingList}>
//         <Header title="Grocery Shopping List" />
//         <AddItem addItem={addItem} />
//         <FlatList
//           data={items}
//           renderItem={({ item }) => (
//             <ListItem item={item} deleteItem={deleteItem} />
//           )}
//         />
//       </SafeAreaView>
//       <StatusBar style="auto" />
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60
//   }
//   // landingPage: {
//   //   flex: 1
//   // },
//   // shoppingList: {
//   //   flex: 1
//   // }
// })
