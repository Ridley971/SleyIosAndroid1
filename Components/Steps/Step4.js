import React from 'react'
import {StyleSheet, View, Text,TextInput, Button, TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
//import {connect} from "react-redux"


class Step4 extends React.Component {
  constructor(props)
   {
    super(props)
    this.tailleText = ""
  }

  _textInputChanged(text) {
    console.log(text);
    this.tailleText = text
  }

  _NextStep(taille)
  {
    /*const action = { type: "UPDATE_TAILLE", value: taille }
    this.props.dispatch(action)*/
    this.props.navigation.navigate("Step5")
   }


  render()
  {

    this.props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={()=> this.props.navigation.popToTop()}>
                <Text style={{
                  fontWeight:'bold'}}>
                Connexion
                </Text>
          </TouchableOpacity>
        ),
      })

    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}> Quelle taille faites vous ?</StepsTitle>
        <View style={{flex:4,justifyContent:"center",alignItems:"center"}}>
            <TextInput
              onChangeText={(text) => this._textInputChanged(text)}
              placeholder="0"
              placeholderTextColor="#8A8985"
              keyboardType={'numeric'}
              keyboardAppearance='dark'
              maxLength={3}
              style={{color:'#8A8985', fontSize:200,
               fontWeight:'bold'}}
              />
              <View style={{ height: 50, width: "60%", borderRadius:15,
                justifyContent:"center", backgroundColor:'rgba(255, 255, 0, 0.7)' }}>
                  <RNPickerSelect

                    placeholder={{label: 'Choisissez votre mesure...',value: null,
                                  color: 'black'}}
                  onValueChange={(value) => console.log(value)}

                  items={[
                      { label: 'Centimètres', value: 'cm'},
                      { label: 'Pieds', value: 'pds' }
                  ]}
                  />
              </View>
        </View>
        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this._NextStep(this.tailleText)}}>
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
/*const mapStateToProps = (state) => {
  return {
   taille: state.taille
 }
}

export default connect(mapStateToProps)(Step4)*/
