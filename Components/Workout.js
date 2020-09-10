import React from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'

import SleyBackground from './CustomComponent/SleyBackground'

import { connect } from 'react-redux'

class Workout extends React.Component {

  render()
  {
    return(
        <SleyBackground style={{flex:1,backgroundColor:"green"}}>

          <View style={{
            position:"absolute", left:20, top:30,
            backgroundColor:"red",
            width:40, height:40}}>
          </View>
          <View style={{
            position:"absolute", right:20, top:30,
            backgroundColor:"yellow",
            width:60, height:60,
            borderRadius:40, borderColor:"white", borderWidth:7}}>
              <Image
              style={{flex:1,width:null, height:null}}
              source={require("../assets/water.png")}/>
          </View>
          <Text style={{
            textAlign:"center", color:"yellow",
            fontSize:30, fontWeight:"bold"}}>
              1 h 00
          </Text>
          <View style={{flex:1,backgroundColor:"green"}}>
              <View style={{flex:1,
               justifyContent:"center",}}>
                  <Text style={{
                    textAlign:"center",
                    backgroundColor:"white",
                     color:"#C0C0C0C0",
                    fontSize:30, fontWeight:"bold",}}>
                      Nom Exercice
                  </Text>
              </View>
              <View style={{flex:4, backgroundColor:"blue"}}>
                  <Image
                  style={{flex:1,width:null, height:null}}
                  source={require("../assets/muscu1.gif")}/>
                  </View>
              <View style={{flex:1, backgroundColor:"purple"}}>

              </View>
          </View>
        </SleyBackground>
    )
  }
}


const styles={

}

export default Workout
