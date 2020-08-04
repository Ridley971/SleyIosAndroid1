import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Facebook from 'expo-facebook';

export default class FBLoginButton extends Component {

  constructor(props){
    super(props)
    this.state= {
      isLoggedin:false,
      userdata: null,
      userIamge: null
    }
  }

  FBlogIn = async () => {
        try {
          //Initialisation du SDK Facebook avec ID de l'application
          //https://developers.facebook.com/apps/766870374087665/settings/basic/
           await Facebook.initializeAsync("766870374087665", "Sley");


          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions
            //Affiche la page de connexion au profile Facebook
            //permissions est un tableau permettant de faire une demande d'accès au données
            //à Facebook   https://developers.facebook.com/docs/permissions/reference
          } = await Facebook.logInWithReadPermissionsAsync("766870374087665", {
            permissions: ["public_profile", "email"]
          });

          if (type === "success") {
            //this.setState({FBToken:token})

            // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,address,birthday,email,picture.height(500)&access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
         alert(`Facebook Login Error: Cancelled`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  FBlogOut = async ()=>{

  }
  render() {
    return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold', color: '#fff', fontSize:30, justifyContent:'center', marginVertical:10}}>
          MARVYNA !!!! :-P
     </Text>
      <Image
        style={{width: 300, height: 300, alignContent: 'center'}}
        source={{uri: 'https://resources.cloud.genuitec.com/wp-content/uploads/2019/03/tutorials_livechat.gif'}}
      />

    <Text style={{fontWeight: 'bold', color: '#fff', fontSize:30, justifyContent:'center', marginVertical:10}}>
           Login With Facebook

    </Text>

        <TouchableOpacity
              style={{
                backgroundColor: "#3f5c9a",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 60,
                borderColor: "#3f5c9a",
                borderWidth: 1
              }}
              onPress={this.FBlogIn}
            >

              <FontAwesome name="facebook-f" size={20} color="white" />
            </TouchableOpacity>


    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  }
});

module.exports = FBLoginButton;
