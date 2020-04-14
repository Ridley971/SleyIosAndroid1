// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Components/Auth/Connexion'
import Accueil from '../Components/Accueil'

const SleyStackNavigator = createStackNavigator({
  Accueil: {
      screen: Accueil,
    navigationOptions: {
      title: 'Accueil',
      headerShown: false
    }
  }
})

export default createAppContainer(SleyStackNavigator)
