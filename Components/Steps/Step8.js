import React from 'react'
import {StyleSheet,View, Text, SafeAreaView, FlatList,TouchableOpacity} from 'react-native'
import FormuleItem from '../CustomComponent/FormuleItem'
import SleyBackground from '../CustomComponent/SleyBackground'
import StepsTitle from '../CustomComponent/StepsTitle'
import formules from '../../Helpers/Formules'


class Step8 extends React.Component {

  _selectFormule= (idForm) =>
  {
    console.log("Form ID: "+idForm);
    this.props.navigation.navigate("Accueil")
  }

  render()
  {


    return(
      <SleyBackground>
          <StepsTitle style={{flex:1, justifyContent:"center"}}> Les Formules</StepsTitle>

            <SafeAreaView style={styles.container}>
              <FlatList
                data={formules}

                renderItem=
                {
                  ({item}) =>
                    {
                        return (<FormuleItem formule={item}
                          selectFormule={this._selectFormule}/>)
                    }

                }
              />
            </SafeAreaView>
      </SleyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  }
});

export default Step8
