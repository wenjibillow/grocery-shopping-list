import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  View,
  Image,
  Linking
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Drawer from './Drawer'
import { apiKey } from '../api/config'

const dishUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${apiKey}`

export default function Recipes() {
  const [dishes, setDishes] = useState(null)

  useEffect(() => {
    axios
      .get(dishUrl)
      .then((res) => {
        setDishes(res.data.results)
      })
      .catch((error) => error)
  }, [])

  const Item = ({
    title,
    healthScore,
    image,
    sourceUrl,
    weightWatcherSmartPoints,
    pricePerServing
  }) => (
    <View style={styles.cardView}>
      <Text style={styles.dishTitleText}>
        <Icon name="coffee" size={16} />
        {title}
      </Text>
      <Image style={styles.img} source={{ uri: image }} />
      <Text>Health Score: {healthScore}</Text>
      <Text>Weight Watcher Smart Points: {weightWatcherSmartPoints}</Text>
      <Text>Price Per Serving: {pricePerServing} kr</Text>
      <TouchableHighlight
        style={styles.btn}
        underlayColor="white"
        onPress={() => {
          Linking.openURL(sourceUrl)
        }}
      >
        <Text style={styles.btnText}>
          To Recipe
          <Icon name="arrow-right" size={16} />
        </Text>
      </TouchableHighlight>
    </View>
  )
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      weightWatcherSmartPoints={item.weightWatcherSmartPoints}
      pricePerServing={item.pricePerServing}
      healthScore={item.healthScore}
      sourceUrl={item.sourceUrl}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Drawer />
      <View>
        <FlatList
          data={dishes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#c7edd1'
  },
  img: {
    width: 312,
    height: 231
  },
  cardView: {
    backgroundColor: 'seashell',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  dishTitleText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: '#c7edd1',
    overlayColor: 'lightgreen'
  },
  btnText: {
    textAlign: 'center'
  }
})
