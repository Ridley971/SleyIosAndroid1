import React from 'react'
import {StyleSheet,View, Text, Image, TouchableOpacity,Button, FlatList} from 'react-native'
import bodies from '../../Helpers/body-percent'
import BodiesList from "../BodiesList"

class Step7 extends React.Component {

  render() {
    return(
      <View style={styles.main_container}>
        <Text style={styles.text_Title}> Quelle est votre cible taux de graisse corporelle ?</Text>

        <BodiesList bodies ={bodies}/>

        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this.props.navigation.navigate("Step8")}}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </View>
    )
  }
}

const styles={
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  main_container:{
    flex:1,
    backgroundColor:'black'
  },

  text_Title:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding:20,
        color:'#C0C0C0C0'
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
}
export default Step7
