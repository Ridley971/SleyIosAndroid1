import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda,LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


export default class Reserv extends Component {
  constructor(props) {
    super(props);


    this.bienEtre = {key:'bienEtre', color: 'blue', selectedDotColor: 'blue'};
    this.workout = {key:'workout', color: 'green',selectedDotColor: 'yellow'};
    this.state = {
      items: {}
    };
  }

  render() {

    const marked={
       '2020-04-30': {dots: [this.bienEtre,this.workout]},

       '2020-05-01': {dots: [this.workout],marked: true, dotColor:'green'},

       '2020-05-03': { disableTouchEvent: true, disable:true,},
     }
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={new Date()}
        firstDay={1}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        minDate={new Date()}
        markingType={'multi-dot'}
        markedDates={marked}
        onDayPress={(day) => {console.log('selected day', day)}}
        onMonthChange={(month) => {console.log('month changed', month)}}
        theme={{calendarBackground: 'black',
                agendaKnobColor: 'yellow',
                agendaDayNumColor: 'green',
                textMonthFontSize: 20, monthTextColor:"yellow",
                textMonthFontWeight: 'bold',
                textDayFontWeight: 'bold',
              dayTextColor:'white',
              textDisabledColor:'gray'}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={2}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        //renderDay={(day, item) => (<Text>{console.log("RENDER DAY: "+ day+ " ITEM"+item.toString())}</Text>)}
        //Masque les jours non présent dans le mois
         hideExtraDays={true}
      />
    );
  }

  loadItems(day) {
    console.log("ICI:"+day.dateString);
    //Prend en  1er paramètre une fontion et en 2eme un délai avant son exécution en ms
    setTimeout(() => {
      for (let i = -2; i < 15; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;

        //Troncage pour obtenir uniquement la date
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems =6;
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text> TEST</Text>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
