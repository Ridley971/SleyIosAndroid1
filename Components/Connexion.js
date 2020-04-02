import React from "react"
import {TextInput,Button, StyleSheet,View, TouchableOpacity, Text} from "react-native"

class Connexion extends React.Component
{
  render()
  {
    return(
      <View style={styles.main_container}>
            <View style={styles.inputView} >
                <TextInput
                  style={styles.inputText}
                  placeholder="Email..."
                  placeholderTextColor="#003f5c"/>
              </View>
              <View style={styles.inputView} >
                 <TextInput
                   style={styles.inputText}
                   placeholder="Password..."
                   placeholderTextColor="#003f5c"/>
               </View>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn}
                  onPress={() => { this.props.navigation.navigate('Accueil')}}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
      </View>
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
  backgroundColor:"#465881",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
  },

  inputText:{
  height:50,
  color:"white"
  },

  forgot:{
   color:"white",
   fontSize:11
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
})
export default Connexion
