import React from 'react'
import {Text} from 'react-native'
class CommonText extends React.Component {
  render() {
    return (
        <Text style={{fontSize: 20, color:"blue"}}>{this.props.children}</Text>
    );
  }
}

export default CommonText
