import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Accueil from "../Components/Accueil"
import Workout from "../Components/Workout"

const Stack = createStackNavigator()

const AccueilStackNav=({navigation}) =>(
      <Stack.Navigator
        initialRouteName='Accueil'
        screenOptions={{
                  headerStyle: {
                    backgroundColor: 'rgba(255, 255, 0, 1)'
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: 'black',
                }}>

        <Stack.Screen
          name='Accueil'
          component={Accueil}
          options={{ headerShown: false }}/>

        <Stack.Screen
          name='Workout'
          component={Workout}
          options={{ headerShown: false }}/>

      </Stack.Navigator>
  )


export default AccueilStackNav
