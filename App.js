import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import  Accueil from "./Components/Accueil"
import Connexion from "./Components/Connexion"
import Navigation from "./Navigation/Navigation"

export default class App extends React.Component
{
  render (){
    return(
      <Navigation/>
    )
  }
}
