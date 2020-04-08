// Components/BodyItem.js

import React from 'react'
import { StyleSheet, Image,TouchableOpacity, Text } from 'react-native'

class BodyItem extends React.Component {

  render() {
    const { body } = this.props

    return (
        <TouchableOpacity
         style={styles.touchOp}>
            <Image
              style={styles.image}
              source={body.image}
            />
            <Text style={styles.text_body}> {body.title}</Text>
        </TouchableOpacity>
    )
  }
}

const styles={
  touchOp:{
      width: 100,
      height: 400,
    alignItems:'center'
  },
  image:{
    width: 100,
    height: 300
  },

  text_body:{
    color:'#C0C0C0C0',
    fontSize:25,
    fontWeight: 'bold'
  }
}

export default BodyItem
