import React, { useRef } from 'react'
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Drawer() {
  //using android specifical component
  const drawer = useRef(null)
  const navigationView = () => {
    return (
      <View>
        <Button
          title="close drawer"
          color="#f2bb4b"
          onPress={() => drawer.current.closeDrawer()}
        />
        <Text>
          Yeah! Let me check some recipes...
          <Icon name="coffee" size={16} />
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.topContainer}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={navigationView}
      >
        <View style={styles.drawerButtonView}>
          <Button
            title="open drawer"
            color="#49704a"
            onPress={() => drawer.current.openDrawer()}
          />
          <Text style={styles.text}>Hi! What to eat today?</Text>
        </View>
      </DrawerLayoutAndroid>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    height: 100
  }
})
