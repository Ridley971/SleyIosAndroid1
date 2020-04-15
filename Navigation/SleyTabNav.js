import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from "../Components/Accueil"
import Profil from "../Components/Profil"
import Connexion from "../Components/Auth/Connexion"
const Tab = createBottomTabNavigator();

function SleyTabNav()
{
  return(

        <Tab.Navigator>
           <Tab.Screen name="Accueil" component={Accueil} />
           <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
  )

}


export default SleyTabNav
