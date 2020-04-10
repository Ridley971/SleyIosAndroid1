// Components/BodiesList.js

import React from 'react'
import { StyleSheet, FlatList,SafeAreaView } from 'react-native'
import BodyItem from './BodyItem'
import { connect } from 'react-redux'

class BodiesList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bodies: [],
      selectedbody:null
    }
  }

  _selectTxGraisse = (bodyId) => {
    if (this.state.selectedbody===null ||
      this.state.selectedbody != bodyId)
      {
        this.setState({ selectedbody:bodyId });
    }
    else {
      this.setState({ selectedbody:null });
    }
  }

  render() {
    return (
       <SafeAreaView  style={{flex:1, alignItems:"center"}}>
        <FlatList
          style={{flex:1}}
          data={this.props.bodies}
          keyExtractor={(item) => item.id.toString()}
          renderItem=
          {
            ({item}) =>
              {
                if (this.props.sexe === item.sexe.toString())
                {
                  return (
                    <BodyItem body={item}
                    isSelected={item.id ===this.state.selectedbody?true:false}
                    selectTxGraisse={this._selectTxGraisse}/>
                  )
                }
              }
          }
        />
        </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(BodiesList)
