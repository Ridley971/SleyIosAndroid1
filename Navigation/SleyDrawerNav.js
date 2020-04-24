import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Resa from '../Components/Fitness/Resa'
import Azone from '../Components/Fitness/Azone'
import Tutos from '../Components/Fitness/Tutos'
import SleyTabNav from './SleyTabNav'

const Drawer = createDrawerNavigator();

export default function SleyDrawerNav() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Accueil" component={SleyTabNav} />
        <Drawer.Screen name="Resa" component={Resa} />
        <Drawer.Screen name="Azone" component={Azone} />
        <Drawer.Screen name="Tutos" component={Tutos} />
      </Drawer.Navigator>
  );
}
