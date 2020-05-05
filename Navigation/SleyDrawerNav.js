import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Tutos from '../Components/Training/Tutos'
import AntrenmanStackNav from './AntrenmanStackNav'
import SleyTabNav from './SleyTabNav'

const Drawer = createDrawerNavigator();

export default function SleyDrawerNav() {
  return (
      <Drawer.Navigator
            drawerStyle={{
              backgroundColor: 'rgba(255, 255, 0, 0.9)',
              width: 200,
            }}>
        <Drawer.Screen name="Accueil" component={SleyTabNav} />
        <Drawer.Screen name="Antrenman" component={AntrenmanStackNav} />
        <Drawer.Screen name="Tutos" component={Tutos} />
      </Drawer.Navigator>
  );
}
