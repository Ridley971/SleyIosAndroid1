import React from 'react'
import {StyleSheet, View,Image, Text,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

import SleyBackground from '../CustomComponent/SleyBackground'

class Antrenman extends React.Component {

  render()
  {
    this.props.navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              onPress={()=>   this.props.navigation.navigate("Planning")}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{width: 40, height: 40, right: 15} }/>
            </TouchableOpacity>
          ),

      })

    return(

        <SleyBackground style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity
            style={styles.touchOp}
            onPress={() => this.props.navigation.navigate("Reserv")}>
            <Text style={styles.text_Obj}>Vote {'\n'}& {'\n'}Réservation</Text>
            <Text style={styles.text_Desc}>
              Voter pour les séances collectives avec le coach et faites vos réservations
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchOp}
            onPress={() => {alert('Antrenman Zone')}}>
            <Text style={styles.text_Obj}>Antrenman Zone</Text>
            <Text style={styles.text_Desc}>
              Réservez votre rack pour vos séances individuelles
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchOp}
            onPress={() => {alert('Bien-etre')}}>
            <Text style={styles.text_Obj}>Bien-Etre</Text>
            <Text style={styles.text_Desc}>
              Réservez vos séances d'ostéopathe, kiné, et autres avec nos partenaires
            </Text>
          </TouchableOpacity>
        </SleyBackground>
    )
  }
}


const styles={
  touchOp:{
    marginBottom:40,
    borderColor:'#C0C0C0C0',
    borderWidth:3,
    borderRadius:35,
    padding:20,
    width:"80%",
    backgroundColor:"rgba(255, 255, 0, 0.7)"

  },

    text_Obj:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black'

    },

    text_Desc:{
      padding:10,
      textAlign:'justify',
      color:'#525252',
      fontSize: 15
    },
}

export default Antrenman
