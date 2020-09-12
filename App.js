import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ConnexionStackNav from './Navigation/ConnexionStackNav'
import SleyTabNav from './Navigation/SleyTabNav'
import  SleyDrawerNav from './Navigation/SleyDrawerNav'
import {Provider} from "react-redux"
import Store from "./Store/configureStore"

export default class App extends React.Component
{

    render(){
        return (
        <Provider store={Store}>
          <NavigationContainer>
            {
              true ? (
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
