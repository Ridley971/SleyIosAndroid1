import 'react-native-gesture-handler';
import React, { useEffect }  from 'react';
import {ActivityIndicator, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import ConnexionStackNav from './Navigation/ConnexionStackNav'
import MainTabNav from './Navigation/MainTabNav'
import  SleyDrawerNav from './Navigation/SleyDrawerNav'
import {AuthContext} from "./Components/Auth/context"

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
  // Déclaration d'une nouvelle variable d'état
  //useState retourne une paire : la valeur de l’état actuel et une fonction qui vous permet de la mettre à jour
  // const [isLoading, setIsLoading] = React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

const initialState= {
  isLoading: true,
  email: null,
  userToken: null
}

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return{
      ...prevState,
      userToken : action.token,
      isLoading: false,
    }
    case 'LOGIN':
      return{
      ...prevState,
      email: action.id,
      userToken : action.token,
      isLoading: false,
    }
    case 'LOGOUT':
      return{
      ...prevState,
      email: null,
      userToken : null,
    }
    case 'REGISTER':
      return{
      ...prevState,
      email: action.id,
      userToken : action.token,
      isLoading: false,
    }

  }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialState)

const authContext= React.useMemo(()=>({
  signIn:(email, password) =>{
    // setIsLoading(false)
    // setUserToken('test')
    let userToken;
    email= null;
    if (email == 'lerid' && password == 'pass') {
      userToken = 'test'
    }
    dispatch({type: 'LOGIN', id: email, token: userToken})
  },
  signOut:() =>{
    // setIsLoading(false)
    // setUserToken(null)
    dispatch({type: 'LOGOUT'})
  },

  signUp:() =>{
    setIsLoading(false)
    setUserToken('test')},
}))

 // Similaire à componentDidMount et componentDidUpdate
useEffect(()=> {
  setTimeout(()=>{
    //setIsLoading(false)
    //dispatch({type: 'RETRIEVE_TOKEN', token: 'null'})

  },1000)
})

  if (loginState.isLoading) {
    return(
      <View style={{
        flex: 1,
        backgroundColor:'black',
      justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator  size="large"/>
      </View>
    )
  }

        return (
          <AuthContext.Provider value={authContext}>
              <NavigationContainer>


                {
                  loginState.userToken !== null ? (
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
        </AuthContext.Provider>
      )


}
export default App;
