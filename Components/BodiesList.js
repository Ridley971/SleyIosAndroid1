// Components/BodiesList.js

import React from 'react'
import { StyleSheet, FlatList,SafeAreaView } from 'react-native'
import BodyItem from './BodyItem'
import { connect } from 'react-redux'

class BodiesList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bodies: []
    }
  }

  render() {
    console.log(this.props.sexe)
    return (
       <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.props.bodies}
          keyExtractor={(item) => item.id.toString()}
          renderItem=
          {
            ({item}) =>
              {
                if (this.props.sexe === item.sexe.toString()) {
                  return (<BodyItem body={item}/>)}
              }
          }
        />
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(BodiesList)
