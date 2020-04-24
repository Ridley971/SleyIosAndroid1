import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ConnexionStackNav from './Navigation/ConnexionStackNav'
import SleyTabNav from './Navigation/SleyTabNav'
import  SleyDrawerNav from './Navigation/SleyDrawerNav'
import {Provider} from "react-redux"
import Store from "./Store/configureStore"

export default function App()
{
  const isLoggedIn=false
  return (
      <Provider store={Store}>
        <NavigationContainer>
          {
            isLoggedIn ? (
             <SleyDrawerNav/>
           ) : (

             <ConnexionStackNav/>
           )
         }

        </NavigationContainer>
      </Provider>
    )

}
