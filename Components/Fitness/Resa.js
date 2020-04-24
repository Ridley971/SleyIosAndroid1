import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'

class Resa extends React.Component {

  render()
  {
    return(

        <View style={{flex:1,backgroundColor:"yellow", justifyContent:'center'}}>
          <Text style={{textAlign:"center"}}>Vote & Réservations</Text>
        </View>
    )
  }
}


const styles={

}

export default Resa
