/*import React from 'react';
import Navigation from "./Navigation/Navigation"
import StepsNavigation from "./Navigation/StepsNavigation"
import {Provider} from "react-redux"
import Store from "./Store/configureStore"

export default class App extends React.Component
{
  render ()
  {

      const isLoggedIn = false;

        if (isLoggedIn ) {
          return <Navigation/> ;
        }

        return <Provider store={Store}><StepsNavigation/></Provider>;

  }
}
*/

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './Navigation/MainStackNavigator'
//import {Provider} from "react-redux"
//import Store from "./Store/configureStore"

export default function App()
{
  return <MainStackNavigator />
   
}
