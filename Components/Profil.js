import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity, Text, ScrollView,Button} from 'react-native'
import { connect } from 'react-redux'
import SleyBackground from './CustomComponent/SleyBackground'
import CommonText from './CustomComponent/CommonText'


import objectifs from '../Helpers/objectifs'
import bodyPercent from '../Helpers/body-percent'
class Profil extends React.Component {
  constructor(props) {
    super(props);
  }


  getObjById(idObj){
    const obj = objectifs.find( objectif => objectif.id === idObj)
    return obj.name;
  }

  getTxById(idTaux){
    const tx = bodyPercent.find( taux => taux.id === idTaux)
    return tx.title;
  }

  render()
  {
    return(
        <SleyBackground style={{flex:1}}>

          <TouchableOpacity style={{zIndex: 1, position:'absolute',top:45, right:15}}
            onPress={()=> this.props.navigation.navigate("Settings")}>
              <Image style={{width:50, height:50}} source={require('../assets/settings.png')} />
          </TouchableOpacity>

          <View style={styles.header_Container}>
                <TouchableOpacity
                  style={styles.touchableOpacity}>
                    <Image style={styles.avatar} source={require('../assets/defaultAvatar.png')} />
                </TouchableOpacity>
                <Text style={{color:"rgba(255, 255, 0, 1)",
                        flex: 1, fontSize:20, fontWeight:'bold'}}>
                    {this.props.pseudo}
                </Text>
          </View>
        <View style={{flex:5,alignItems:'center'}}>
          <ScrollView style={styles.container}>
            <View style={styles.categ_container}>
              <View style={{flexDirection:"row", padding:10}}>
                <CommonText style={{flex:1}}>
                    Mon plan fitness
                </CommonText>
                <Button title="Modifier" />
              </View>
              <Text style={styles.text}>
                {"\u2666 Mon objectif: "}{this.getObjById(this.props.idObj) + "\n"}
                {"\u2666 Mon poids initial: "}{this.props.poids + " KG \n"}
                {"\u2666 Mon taux de graisse initial: "}{this.getTxById(this.props.idTxAct) + "\n"}
                {"\u2666 Mon taux de graisse cible: "}{this.getTxById(this.props.idTxCible) + "\n"}
              </Text>
            </View>

            <View style={styles.categ_container}>
              <View style={{flexDirection:"row", padding:10}}>
                <CommonText style={{flex:1}}>
                    Mes données sportives
                </CommonText>
              </View>
              <Text style={styles.text}>
                {"\u2666 Charge MAX altères: 30 KG  \n"}
                {"\u2666 Charge MAX développer coucher: 100 KG\n"}
                {"\u2666 Charge MAX Burpees: 25 KG  \n"}
                {"\u2666 ... \n"}
              </Text>
            </View>
          </ScrollView>
        </View>

        </SleyBackground>
    )
  }
}


const styles = StyleSheet.create({
  header_Container:{
    marginTop:30,
    flex:2,
    alignItems:'center',

  },
categ_container:  {
  flex: 1,
  backgroundColor:"white",
  borderColor:"rgba(255, 255, 0, 1)",
  borderWidth:3,
  borderRadius:35,
  marginBottom:25,
  marginTop:25,
  width:"95%",},

  container:{
    flex:1,
    /*borderColor:"rgba(255, 255, 0, 1)",
    borderWidth:3,
    borderRadius:35,
    marginBottom:25,*/
    marginTop:25,
    width:"90%"
  },
  touchableOpacity:{
    flex:1,
    margin: 45,
    width: 120, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 55,
    borderColor: '#C0C0C0C0',
    borderWidth: 4,
  },
  text:{
    fontSize:16,
    fontWeight:'bold',
    lineHeight: 40,
    color:"black",

  }
})

const mapStateToProps=(state)=>
{
  return state

}
export default connect(mapStateToProps) (Profil)
