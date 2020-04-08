import React from 'react'
import {StyleSheet,View, Text, SafeAreaView, FlatList,TouchableOpacity} from 'react-native'
import FormuleItem from '../FormuleItem'
import formules from '../../Helpers/Formules'


class Step8 extends React.Component {
  render()
  {
    return(
      <View style={styles.main_container}>
        <Text style={styles.text_Title}> Les Formules</Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={formules}

            renderItem=
            {
              ({item}) =>
                {
                    return (<FormuleItem formule={item}/>)
                }

            }
          />
        </SafeAreaView>
        <TouchableOpacity
          onPress={() => {this.props.navigation.replace("Accueil")}}>
            <Text style={{fontSize: 25}}> Accueil</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1
  },
  text_Title:{
    fontSize:32,
    textAlign:"center"
  },
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  item: {
    backgroundColor: '#f9c2ff',

    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    flex:1,
    fontSize: 32,
  },
  promo:{
    backgroundColor:'yellow',
  }
});

export default Step8
