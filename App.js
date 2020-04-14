import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './Navigation/MainStackNavigator'
import {Provider} from "react-redux"
import Store from "./Store/configureStore"

export default function App()
{
  return (
      <Provider store={Store}>
        <MainStackNavigator/>
      </Provider>
    )

}
