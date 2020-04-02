// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Components/Connexion'
import Accueil from '../Components/Accueil'

const SleyStackNavigator = createStackNavigator({
  Connexion: {
      screen: Connexion,
    navigationOptions: {
      title: 'Connexion',
      headerShown: false
    }},
  Accueil: {
      screen: Accueil,
    navigationOptions: {
      title: 'Accueil',
      headerShown: false
    }
  }
})

export default createAppContainer(SleyStackNavigator)
