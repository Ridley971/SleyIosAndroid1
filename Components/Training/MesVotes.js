import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'

class MesVotes extends React.Component {

  render()
  {
    return(

        <View style={{flex:1,backgroundColor:"yellow"}}>
          <Text style={{textAlign:"center"}}>Mes Votes</Text>
        </View>
    )
  }
}


const styles={

}

export default MesVotes
