import React from 'react'
import {StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native'

import SleyBackground from './CustomComponent/SleyBackground'

import { connect } from 'react-redux'

class Workout extends React.Component {

  render()
  {
    return(
        <View style={{flex:1,backgroundColor:"black"}}>

          <Text style={{
            textAlign:"center", color:"yellow",
            fontSize:30, fontWeight:"bold"}}>
              1 h 00
          </Text>
          <View style={{flex:1}}>
              <View style={{flex:1,
               justifyContent:"center",}}>
                  <Text style={{
                    textAlign:"center",
                     color:"#C0C0C0C0",
                    fontSize:30, fontWeight:"bold",}}>
                      Nom Exercice
                  </Text>
              </View>
              <View style={{flex:2, }}>
                  <Image
                  style={{flex:1, borderRadius: 60,width:null, height:null}}
                  source={require("../assets/muscu1.gif")}/>
                  </View>
              <View style={{flex:1, top: 25}}>
                <View style={{flex:1, flexDirection:"row"}}>
                  <Text style={{flex:1,fontWeight:"bold",color:"#C0C0C0C0",fontSize:24}}> Série: 1/4</Text>
                  <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign: 'right'}}> Répétion: 15</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign:"center"}}> Charge: 20 KG</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign:"center"}}> Bouton</Text>
                </View>

              </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack(null)}
             style={{position:"absolute", left:20, top:30,
          width:40, height:40,}} >
            <Image
            style={{flex:1,width:null, height:null}}
            source={require("../assets/close.png")}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
            position:"absolute", right:20, top:30,
            backgroundColor:"yellow",
            width:60, height:60,
            borderRadius:40, borderColor:"white", borderWidth:7}}>
              <Image
              style={{flex:1,width:null, height:null}}
              source={require("../assets/water.png")}/>
          </TouchableOpacity>
        </View>
    )
  }
}


const styles={

}

export default Workout
