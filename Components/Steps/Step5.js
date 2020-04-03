import React from 'react'
import {StyleSheet, View, Text,TextInput, Button,Picker, TouchableOpacity } from 'react-native'

class Step5 extends React.Component {
  render()
  {
    return(
      <View style={styles.main_container}>
        <Text style={styles.text_Title}> Combien pesez vous ?</Text>
        <TextInput
          placeholder="0"
          placeholderTextColor="#8A8985"
          keyboardType={'numeric'}
          keyboardAppearance='dark'
          maxLength={5}
          style={{color:'#8A8985', fontSize:90,fontWeight:'bold',textAlign:'center'}}
          />

          <TouchableOpacity
              style={styles.touchButton}
              onPress={() => {this.props.navigation.navigate("Step6")}}>
              <Text style={styles.text_Button}>Valider</Text>
          </TouchableOpacity>

    </View>
    )
  }
}

const styles={
  main_container:{
    flex:1,
    backgroundColor:'black'
  },

  text_Title:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding:20,
        color:'#C0C0C0C0'
    },


  touchButton:{
        borderColor:'#A9A9A9',
        backgroundColor:'#DCBD10',
        borderWidth:3,
        borderRadius:35,
        padding:20

      },

      text_Button:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#8A8985'

      },
}
export default Step5
