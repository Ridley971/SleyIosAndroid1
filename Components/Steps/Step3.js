import React from 'react'
import {StyleSheet, View, Text,Button,Platform,TouchableOpacity } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
import CommonText from "../CustomComponent/CommonText"

export default class Step3 extends React.Component {

  state={
    date: new Date(),
    today: new Date(),
    mode:'date',
    show:false
  }

  setDate=(event,date)=>{
    date=date||this.state.state
    this.setState({
      show:Platform.OS=='ios'?true:false,
      date,
    })
  }

  show=mode=>{
    this.setState({
      show:true,
      mode,
    })
  }

  datepicker=()=>{
    this.show('date')
  }

  render()
  {
    const{show,date,today, mode}=this.state

        return(
            <SleyBackground>

                <StepsTitle style={{flex:1,justifyContent:"center"}}>Quel est votre Date de naissance ?</StepsTitle>


                <View style={{width:"80%",borderRadius:45,
                backgroundColor:"rgba(255, 255, 0, 0.9)",alignSelf:"center"}}>
                  <TouchableOpacity style={styles.touchButton} onPress={this.datepicker}>
                    <Text>{this.date}</Text>
                  </TouchableOpacity>
                  {
                    show &&
                    <DateTimePicker
                    value={date}
                    mode={mode}
                    display='default'
                    maximumDate= {new Date(today.getFullYear()-18,today.getMonth(),today.getDate())}
                    minimumDate= {new Date(today.getFullYear()-100,today.getMonth(),today.getDate())}
                    style={{ borderRadius:25}}
                    onChange={this.setDate}>
                     </DateTimePicker>
                  }
                </View>

                <CommonText style={styles.text_Detail}>
                Votre âge nous permet de mieux personnaliser
                vos exercies et votre nutrition </CommonText>



                <TouchableOpacity style={styles.touchButton} onPress={() => {this.props.navigation.navigate("Step4")}}>
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
  text_Title:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      padding:20,
      color:'#C0C0C0C0'
  },
  text_Detail:{
      flex:1,
      textAlign:'center',
      color:'#B4B1B0',
      fontSize: 20,
      marginTop:20
  }

}
