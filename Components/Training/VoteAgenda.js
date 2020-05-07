import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
//https://github.com/oblador/react-native-collapsible
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import horaires from '../../Helpers/horaires'

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    checked:false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={1000}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.jour}</Text>
      </Animatable.View>
    );
  };



  renderContent(section, _, isActive) {
    const hor= section.horaires
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
      {Object.keys(hor).map(key => {
        return (

          <CheckBox
            style={styles.headerText}
            title= {"De: "+ hor[key].debut +" à "+ hor[key].fin }
            checked={false}
          />)
      })}
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Accordion Example</Text>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map(selector => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <Accordion
            activeSections={activeSections}
            sections={horaires}
            //touchableComponent={CheckBox}
            //Permet d'avoir plusieurs sections activent
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={100}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    alignItems:'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'yellow',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
