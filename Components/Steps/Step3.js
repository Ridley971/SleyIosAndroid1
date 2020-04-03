import React from 'react'
import {StyleSheet, View, Text,Button,Platform,TouchableOpacity } from 'react-native'

//import DateTimePicker from '@react-native-community/datetimepicker'

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

  timepicker=()=>{
    this.show('time')
  }
  render()
  {
    const{show,date,today, mode}=this.state

        return(
            <View style={styles.main_container}>

                <Text style={styles.text_Title} >Quel est votre Date de naissance ?</Text>

                                {
                                /*  show &&
                                  <View style={{backgroundColor:"#DCBD10", borderRadius:100}}>
                                  <DateTimePicker
                                  value={date}
                                  textColor="red"
                                  mode={mode}
                                  display='default'
                                  maximumDate= {new Date(today.getFullYear()-18,today.getMonth(),today.getDate())}
                                  minimumDate= {new Date(today.getFullYear()-100,today.getMonth(),today.getDate())}

                                  onChange={this.setDate}>
                                   </DateTimePicker>
                                   </View>
                                   */
                                }
                <Button onPress={this.datepicker} title="show date picker !"
                />
                <Text style={styles.text_Detail}>
                Votre âge nous permet de mieux personnaliser
                vos exercies et votre nutrition </Text>



                <TouchableOpacity style={styles.touchButton} onPress={() => {this.props.navigation.navigate("Step4")}}>
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
  text_Title:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      padding:20,
      color:'#C0C0C0C0'
  },
  text_Detail:{
      textAlign:'center',
      color:'#B4B1B0',
      fontSize: 20
  }

}
