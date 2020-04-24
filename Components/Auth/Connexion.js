import React from "react"
import {TextInput,Button, StyleSheet,View, TouchableOpacity, Text} from "react-native"
import SleyBackground from "../CustomComponent/SleyBackground"

class Connexion extends React.Component
{
  render()
  {
    return(
      <SleyBackground style={{alignItems:"center"}}>
              <Text style={{
                  marginTop:"10%",
                  fontSize: 55,
                  fontWeight:"bold",
                  color:'#C0C0C0C0'}}>SLEY</Text>
              <Text style={{
                  fontSize: 35,
                  fontWeight:"bold",
                  color:'#FFD700',
                marginBottom:"25%"}}>Sport Training</Text>

            <View style={styles.inputView} >
                <TextInput
                  style={styles.inputText}
                  placeholder="Email..."
                  placeholderTextColor="#C0C0C0C0"/>
              </View>
              <View style={styles.inputView} >
                 <TextInput
                   style={styles.inputText}
                   placeholder="Password..."
                   placeholderTextColor="#C0C0C0C0"/>
               </View>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Step1")}>
                <Text style={styles.signIn}>S'inscrire</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn}
                  onPress={()=> this.props.navigation.reset({
                            index: 1,
                            routes: [{ name: 'SleyDrawerNav' }],
                          })}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
      </SleyBackground>
    )
  }

}
const styles = StyleSheet.create({
  //Containers
  main_container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView:{
  width:"80%",
  backgroundColor:"rgba(255, 255, 0, 0.5)",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
  },

  inputText:{
  height:50,
  color:"#C0C0C0C0",
  fontWeight:"bold"
  },

  forgot:{
   color:"#fb5b5a",
   fontSize:20,
   fontWeight:"bold",
   padding:10
 },

 signIn:{
  color:"#FFD700",
  fontSize:20,
  fontWeight:"bold",
  padding:10
},
 loginBtn:{
  width:"80%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10
  },
  loginText:{
    color:"#C0C0C0C0",
    fontSize:25,
    fontWeight:"bold"
  }
})
export default Connexion
