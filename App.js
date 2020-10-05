import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ConnexionStackNav from './Navigation/ConnexionStackNav'
import MainTabNav from './Navigation/MainTabNav'
import  SleyDrawerNav from './Navigation/SleyDrawerNav'
import {Provider} from "react-redux"
import Store from "./Store/configureStore"


import { createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from "./Components/Accueil"
import Tutos from './Components/Training/Tutos'
import Planning from "./Components/Planning"
import MesVotes from './Components/Training/MesVotes'
import ReservStack from './Navigation/AntrenmanStackNav'
import {DrawerContent} from "./Components/CustomComponent/DrawerContent"

import MainTabScreen from "./Navigation/MaterialBottomTab"
const Drawer = createDrawerNavigator();

export default class App extends React.Component
{

    render(){
        return (
        <Provider store={Store}>
          <NavigationContainer>

              {/*<Drawer.Navigator>
                <Drawer.Screen name="Accueil" component={Accueil} />
                <Drawer.Screen name="Reserver" component={ReservStack} />
                <Drawer.Screen name="Mes Réservations" component={Planning } />
                <Drawer.Screen name="Mes Votes" component={MesVotes} />
                <Drawer.Screen name="Tutos" component={Tutos} />
              </Drawer.Navigator>*/}


            {
              false ? (


               <SleyDrawerNav/>
             ) : (

               <ConnexionStackNav/>
             )
           }

          </NavigationContainer>
        </Provider>
      )
    }

}
