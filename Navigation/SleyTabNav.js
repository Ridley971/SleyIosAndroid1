import * as React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from "../Components/Accueil"
import ProfileStackNav from "./ProfileStackNav"
import Boutique from "../Components/Boutique"
import Planning from "../Components/Planning"
import Connexion from "../Components/Auth/Connexion"


const Tab = createBottomTabNavigator();

function SleyTabNav()
{
  return(

        <Tab.Navigator
            initialRouteName="Accueil"
            tabBarOptions={{
              showLabel:false,
                style: {
                         backgroundColor: 'rgba(255, 255, 0, 0.7)',
                       }

          }}>

          <Tab.Screen name="Planning"
             component={Planning}
             options={{
                   tabBarLabel: 'GYM',
                   tabBarIcon: () => {
                     return <Image
                       source={require('../assets/gym.png')}
                       style={styles.tab_Icon}/>
                   },
                 }}/>

         <Tab.Screen name="Boutique"
            component={Boutique}
            options={{
                  tabBarLabel: 'Boutique',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/store3.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>

           <Tab.Screen name="Accueil"
              component={Accueil}
              options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: () => {
                      return <Image
                        source={require('../assets/home.png')}
                        style={styles.tab_Icon}/>
                    },
                  }}/>

           <Tab.Screen name="Profil"
            component={ProfileStackNav}
            options={{
                  tabBarLabel: 'Profil',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/profile.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>
                
        </Tab.Navigator>
  )

}

const styles = StyleSheet.create({
  tab_Icon: {
    height:40, width:40
  },
})
export default SleyTabNav
