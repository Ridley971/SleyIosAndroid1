import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import ToggleDrawer from './ToggleDrawer'

class SecondBackground extends React.Component {

  render()
  {
    //const { title} = this.props
    return(
      <View style={styles.main_container}>

           <ToggleDrawer {...this.props}/>
           <View style={styles.logo_container}>
            <Image style={{height:70, width:70}} source={require('../../assets/icon2.png')}/>
           </View>

           <View>
               <Text style={{
                   fontSize: 35,
                   marginBottom:20,
                   fontWeight:"bold",
                   color:'#C0C0C0C0',
                 }}>{ this.props.title}</Text>
            </View>

            {this.props.children}
       </View>
    )
  }
}


const styles = StyleSheet.create({
  //Containers
  main_container: {
    flex: 1,
    backgroundColor:'black',
    alignItems:"center"
  },
  logo_container: {
    flex: 0,
    alignItems:'center',
    justifyContent:'center',
    marginTop:"25%",
  },
})

export default SecondBackground
