import React from 'react'
import {StyleSheet, View, Text,Button,Platform,TouchableOpacity } from 'react-native'

import CustomDatePicker from '../CustomComponent/CustomDatePicker'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
import CommonText from "../CustomComponent/CommonText"
import moment from "moment";

export default class Step3 extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      date:moment(new Date()),
      showDatePicker:false
     }
  }


  render()
  {
    //const { date, showDatePicker } = this.state
    console.log(this.state)
        return(
            <SleyBackground>

                <StepsTitle style={{flex:1,justifyContent:"center"}}>Quel est votre Date de naissance ?</StepsTitle>


                <View style={{width:"80%",borderRadius:45,alignSelf:"center"}}>
                  <TouchableOpacity style={styles.touchButton}
                    onPress={()=> {this.setState({showDatePicker:true})}} >
                    <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold"}}>
                      {moment(this.state.date).format("DD-MM-YYYY")}
                    </Text>
                  </TouchableOpacity>
                  {this.state.showDatePicker && (
                        <CustomDatePicker
                          date={this.state.date}
                          onClose={date => {
                            console.log("Platform: "+Platform.OS)
                            if (date && Platform.OS !== 'ios')
                            {
                              console.log("IF")
                              this.setState({ showDatePicker: false, date: moment(date) });
                            } else {
                              console.log("ELSE")
                              this.setState({ showDatePicker: false });
                            }
                          }}
                          onChange={d => {
                            this.setState({ date: moment(d) });
                          }}
                        />
                      )
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
