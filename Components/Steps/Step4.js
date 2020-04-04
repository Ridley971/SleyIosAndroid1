import React from 'react'
import {StyleSheet, View, Text,TextInput, Button, TouchableOpacity,Picker } from 'react-native'

import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"



class Step4 extends React.Component {
  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  render()
  {
    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}> Quelle taille faites vous ?</StepsTitle>
        <View style={{flex:4,justifyContent:"center",alignItems:"center"}}>
            <TextInput
              placeholder="0"
              placeholderTextColor="#8A8985"
              keyboardType={'numeric'}
              keyboardAppearance='dark'
              maxLength={3}
               style={{color:'#8A8985', fontSize:200,
               fontWeight:'bold'}}
              />
            <Picker
              selectedValue = {this.state.user}
              onValueChange = {this.updateUser}
              style={{ height: 50, width: 150, borderRadius:15,
                  backgroundColor:'rgba(255, 255, 0, 0.7)' }}
             >
             <Picker.Item label="Centimetres" value="cm" />
             <Picker.Item label="Pieds" value="pied" />
           </Picker>
        </View>
        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this.props.navigation.navigate("Step5")}}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>


    </SleyBackground>
    )
  }
}
const styles={

  touchButton:
{
    borderColor:'#C0C0C0C0',
    backgroundColor:'rgba(255, 255, 0, 0.7)',
    borderWidth:3,
    borderRadius:35,
    padding:20,
    marginBottom:30

  },

  text_Button:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 30,

  },

}

export default Step4
