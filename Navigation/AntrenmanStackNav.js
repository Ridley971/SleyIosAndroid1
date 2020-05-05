import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native'

import Antrenman from "../Components/Training/Antrenman"
import Azone from "../Components/Training/Azone"
import Reserv from "../Components/Training/Reserv"
import Planning from "../Components/Planning"
import CheckObj from "../Components/Training/CheckObj"

const Stack = createStackNavigator()

const AntrenmanStackNav=({navigation}) =>(
      <Stack.Navigator
        initialRouteName='Antrenman'
        screenOptions={{
                  headerStyle: {
                    backgroundColor: 'rgba(255, 255, 0, 1)'
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: 'black',
                  headerBackTitleVisible:false,
                }}>

        <Stack.Screen
          name='Antrenman'
          component={Antrenman}
          options={{
            title: 'Antrenman',
          }}/>

        <Stack.Screen
          name='Azone'
          component={Antrenman}
          options={{
            title: 'Antrenman Zone',
          }}/>

          <Stack.Screen
            name='Reserv'
            component={Reserv}
            options={{
              title: 'Réserver',
            }}/>

          <Stack.Screen
            name='Planning'
            component={Planning}
            options={{
              title: 'Mes Réservations',
            }}/>

            <Stack.Screen
              name='CheckObj'
              component={CheckObj}
              options={{
                title: 'Vérifier votre objectif',
              }}/>
      </Stack.Navigator>
  )


export default AntrenmanStackNav
