import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LandingPage from '../screens/LandingPage'
import Home from '../screens/Home'
import GroceryShoppingList from '../screens/GroceryShoppingList'
import RecipeLibrary from '../screens/RecipeLibrary'

const screens = {
  LandingPage: {
    screen: LandingPage
  },
  Home: {
    screen: Home
  },
  GroceryShoppingList: {
    screen: GroceryShoppingList
  },
  RecipeLibrary: {
    screen: RecipeLibrary
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
