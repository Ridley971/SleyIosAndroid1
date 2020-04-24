import * as React from 'react';
import { StyleSheet,Text, View, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileStackNav from "./ProfileStackNav"
import SleyDrawerNav from "./SleyDrawerNav"

import Accueil from "../Components/Accueil"
import Boutique from "../Components/Boutique"
import Connexion from "../Components/Auth/Connexion"
import Resa from "../Components/Fitness/Resa"

const Tab = createBottomTabNavigator();

const  SleyTabNav =({navigation})=>(
        <Tab.Navigator
           initialRouteName="Accueil"
            tabBarOptions={{
              showLabel:false,
              style: {
                         backgroundColor: 'rgba(255, 255, 0, 0.7)',
                       },
              activeBackgroundColor:'#FFF9B8'

            }}
          >

          <Tab.Screen name="SleyDrawerNav"
            component={SleyDrawerNav}
             options={{
                   tabBarLabel: 'GYM',
                   tabBarIcon: () => {
                     return <Image
                       source={require('../assets/gym.png')}
                       style={styles.tab_Icon}/>
                   },
                   tabBarButton: props =>(
                     <TouchableOpacity
                        {...props}
                        onPress={() => navigation.toggleDrawer()}
                      />
                   )
                 }}
            />

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


const styles = StyleSheet.create({
  tab_Icon: {
    height:40, width:40
  },
})
export default SleyTabNav
