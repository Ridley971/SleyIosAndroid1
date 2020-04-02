import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Accueil from "./Components/Accueil"
import Navigation from "./Navigation/Navigation"

export default class App extends React.Component
{
  render (){
        const isLoggedIn = false;

        if (isLoggedIn) {
          return <Accueil />;
        }
        return <Navigation />;
      }
}
