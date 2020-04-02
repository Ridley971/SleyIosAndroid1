import React from "react"
import{ImageBackground, StyleSheet, View,Text} from "react-native"
import CommonText from "./CommonText"

class SleyBackground extends React.Component
{
  render()
  {
    return(
        <View style={styles.main_container}>
          <ImageBackground source={require('../assets/home.png')} style={styles.image}>

          </ImageBackground>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor:"green"
  },

  image: {
    flex:1,
     resizeMode: "cover",
 },

})

export default SleyBackground
