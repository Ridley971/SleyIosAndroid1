import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Accueil from "./Components/Accueil"
import Navigation from "./Navigation/Navigation"
import StepsNavigation from "./Navigation/StepsNavigation"
import {Provider} from "react-redux"
import Store from "./Store/configureStore"

export default class App extends React.Component
{
  render (){
        const isLoggedIn = false;

        if (isLoggedIn) {
          return <Provider store={Store}><Navigation/> </Provider>;
        }
        return <Provider store={Store}><StepsNavigation/></Provider>;
      }
}
