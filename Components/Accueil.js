import React from 'react'
import  {StyleSheet,View,Button,Image,Text,Alert, TouchableOpacity,ImageBackground} from 'react-native'
import CommonText from "./CommonText"



class Accueil extends React.Component
{
  constructor(props) {
    super(props);
    this.userName= "Le Rid";
  }

  render()
  {
    return(
     <View style={styles.main_container}>
          <View style={styles.logo_container}>
          <Image style={{height:100, width:100}} source={require('../assets/icon.png')}/>
          </View>

          <View style={styles.title_container}>
            <CommonText>TESTTT</CommonText>
              <Text style={{
                  fontSize: 55,
                  fontWeight:"bold",
                  color:'#C0C0C0C0'}}>SLEY</Text>
              <Text style={{
                  fontSize: 35,
                  fontWeight:"bold",
                  color:'yellow'}}>Sport Training</Text>
          </View>
          <View style={styles.options_container}>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/profile.png')}/>
                  <Text style={styles.text_Common}> Profil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/calendar.png')}/>
                  <Text style={styles.text_Common}> Planning</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/information.png')}/>
                  <Text style={styles.text_Common}> Infos pratiques</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/partners.png')}/>
                  <Text style={styles.text_Common}> Partenaires</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/profile.png')}/>
                  <Text style={styles.text_Common}>À propos </Text>
                </View>
              </TouchableOpacity>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  //Containers
  main_container: {
    flex: 1,
    backgroundColor:'black'
  },
  logo_container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  title_container: {
    flex: 1,
    alignItems:'center'
  },
  options_container: {
    flex: 3
  },
  touch_container:{
    flexDirection:"row"
  },


  //Text
  text_Common:{
      fontSize: 25,
      fontWeight:"bold",
      color:'#C0C0C0C0'
  },

  //TouchableOpacity
  touchOption:{
      marginBottom:10,
      /*borderColor:'#A9A9A9',
      borderWidth:3,
      borderRadius:35,*/
      padding:10,
      left:50,
      alignSelf:'baseline' // Le parent s'ajuste à l'enfant
  }
})
export default Accueil
