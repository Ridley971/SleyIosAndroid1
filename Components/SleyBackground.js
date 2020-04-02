import React from "react"
import{ImageBackground, StyleSheet} from "react-native"
import CommonText from "./CommonText"

class SleyBackground extends React.Component
{
  render()
  {
    return
    (
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/icon.png')} style={styles.image}>
          <CommonText>Inside</CommonText>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:"black"
  },

  image: {
   flex: 1,
   resizeMode: "cover",
   justifyContent: "center"
 },
 
})
export default SleyBackground
