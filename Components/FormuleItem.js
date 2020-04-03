// Components/BodyItem.js

import React from 'react'
import { StyleSheet,View,TouchableOpacity, Text } from 'react-native'

class FormuleItem extends React.Component {

  render() {
    const { formule } = this.props

    return (
      <View style={styles.item}>
        <View style={{alignItems:"flex-end"}}>
            <View style={{backgroundColor:'purple'}}>
              <Text style={{fontSize:25}}>{formule.promo}</Text>
            </View>
        </View>

        <View style={{}}>
          <Text style={styles.txt_Prix}>{formule.prix}</Text>
            <Text style={styles.txt_Libelle}>{formule.libelle}</Text>
          <Text style={styles.txt_Detail}>{formule.detail}</Text>

          <TouchableOpacity style={styles.touchChoi}
            onPress={() => {this.props.navigation.navigate("Accueil")}}>
              <Text style={{fontSize: 25}}> Choisir</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles={
  txt_Detail:{
    textAlign:'center',
    fontSize: 18,
    marginVertical: 15,
  },
  txt_Prix:{
    fontSize: 30,
    fontWeight:'bold',
     backgroundColor:'purple',
     textAlign: 'center'
  },
  txt_Libelle:{
      fontSize: 25,
      fontWeight:'bold',
       backgroundColor:'purple',
       textAlign: 'center'
    },
  touchChoi:{
    borderColor:'#A9A9A9',
    backgroundColor:'#DCBD10',
    borderWidth:3,
    borderRadius:35,
    marginVertical: 5,marginHorizontal: 90,alignItems:'center'
  },
item:{
  flex:1,
  backgroundColor:'gray',
  marginVertical: 15,
  marginHorizontal: 16,
  borderRadius:25,
  },

  text_body:{
    color:'#C0C0C0C0',
    fontSize:25,
    fontWeight: 'bold'
  }
}

export default FormuleItem
