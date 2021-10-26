import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import image from '../assets/food.png'

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>PlanMyMeal</Text>
        <Text style={styles.h2}>
          My meal plan with recipes and grocery shopping.
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.btnContainer}>
          <Button
            title="LET'S START"
            style={styles.btn}
            onPress={() => this.onPress()}
            color="#fff"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%'
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
    marginTop: 10
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8
  },
  img: {
    width: 300,
    height: 260,
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 60
  },
  btnContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    marginBottom: 115
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10
  }
})
