import React from 'react'
import {StyleSheet,View, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import bodies from "../../Helpers/body-percent"
import SleyBackground from "../CustomComponent/SleyBackground"
import BodiesList from "../CustomComponent/BodiesList"
import StepsTitle from "../CustomComponent/StepsTitle"

class Step6 extends React.Component {
  render() {
    console.log(this.constructor.name);
    return (
      <SleyBackground>
        <StepsTitle style={styles.text_Title}> Quelle est votre taux de graisse corporelle ?</StepsTitle>


        <BodiesList bodies ={bodies} tauxGraisse="actuel"/>

        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this.props.navigation.navigate("Step7")}}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </SleyBackground>
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
export default Step6
