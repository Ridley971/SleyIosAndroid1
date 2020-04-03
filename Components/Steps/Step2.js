import React from 'react'
import {StyleSheet, View, Text,Button,Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"

class Step2 extends React.Component {

  _NextStep(sexe) {

    const action = { type: "TOGGLE_SEXE", value: sexe }
    this.props.dispatch(action)
    this.props.navigation.navigate("Step3")
   }

  render()
  {
    return(
      <SleyBackground>
        <StepsTitle style={{flex:1,backgroundColor:"green"}}>Quel est votre Sexe ?</StepsTitle>

        <View style={styles.gender_container}>
          <TouchableOpacity
          style={styles.touchMale}
          onPress={() => {this._NextStep("M")}}>
          <Image
              style={{width:150, height: 150, opacity:0.8}}
              source={require('../../assets/gender-Male.png')}
                />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchFemale}
           onPress={() => {this._NextStep("F")}}>

          <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/gender-Female.png')}
                />
          </TouchableOpacity>
        </View>


    </SleyBackground>
    )
  }
}
const styles={

  gender_container:{
    flex:6,
    alignItems: 'flex-start',
    flexDirection:"row"
  },
  touchMale:{
    backgroundColor:'blue',
  },
  touchFemale:{
    backgroundColor:'pink'
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Step2)
