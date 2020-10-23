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

const App = () =>
{

        return (
        <Provider store={Store}>
          <NavigationContainer>



            {
              false ? (
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent{...props}/>}
                    drawerStyle={{
                      backgroundColor: 'rgba(255, 255, 0, 0.9)',
                      width: 240,
                    }}>
                  <Drawer.Screen name="Accueil" component={MainTabNav} />
                  <Drawer.Screen name="Reserv" component={ReservStack} />
                  <Drawer.Screen name="Tutos" component={Tutos} />
                  <Drawer.Screen name="MyReservations" component={Planning } />
                  <Drawer.Screen name="MyVotes" component={MesVotes} />
                </Drawer.Navigator>


             ) : (

               <ConnexionStackNav/>
             )
           }

          </NavigationContainer>
        </Provider>
      )


}
export default App;
