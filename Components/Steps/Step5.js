import React from 'react'
import {StyleSheet, View, Text,TextInput, Button,Picker, TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"

class Step5 extends React.Component {
  render()
  {
    return(
      <SleyBackground>
        <StepsTitle> Combien pesez vous ?</StepsTitle>
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

              <View style={{ height: 50, width: "60%", borderRadius:15,
                justifyContent:"center",  backgroundColor:'rgba(255, 255, 0, 0.7)' }}>
                  <RNPickerSelect
                    placeholder={{label: 'Choisissez votre mesure...',value: null,
                                  color: 'black'}}
                  onValueChange={(value) => console.log(value)}

                  items={[
                      { label: 'Kilogrammes', value: 'kg'},
                      { label: 'Pounds', value: 'pds' }
                  ]}
                  />
              </View>
        </View>
        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this.props.navigation.navigate("Step6")}}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </SleyBackground>
    )
  }
}

const styles={

  touchButton:
{
    justifyContent:"flex-end",
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
export default Step5
