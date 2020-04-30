import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda,LocaleConfig} from 'react-native-calendars';

import horaires from '../../Helpers/horaires'

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


    //console.log(Object.entries(horaires));
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

      console.log("CHECK 1:"+ this.state.items.length);
    //Prend en  1er paramètre une fontion et en 2eme un délai avant son exécution en ms
    //setTimeout(() => {

        const date = new Date(day.timestamp);

        //On obtient l'index du jour de la semaine (0 à 6) sélectionné dans l'agenda
        const numDay =  date.getDay()
        //console.log("Num DAY: "+ numDay );

        //On recherche l'objet dont l'index correspond à l'id du jour
        const monObj= horaires.find( horaire => horaire.id == numDay)
        if (monObj)
        {
            //console.log(monObj.jour);

            //On obtient le nombres d'horaires pour le jour concerné
            //correspond au nombre de séances MAX du jour
            const nSeances= monObj.horaires.length
            //console.log(nSeances);

            if (!this.state.items[day.dateString]) {
                this.state.items[day.dateString] = [];
              for (let i = 0; i < nSeances; i++) {

                this.state.items[day.dateString].push({
                    debut:monObj.horaires[i].debut,
                    fin:monObj.horaires[i].fin,
                    name: 'Item for ' + day.dateString + ' #' + i,
                })
              }
            }
        }

        console.log("CHECK 2:"+ this.state.items.length);
        //Troncage pour obtenir uniquement la date
        /*const strTime = this.timeToString(day.timestamp);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems =7;
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
          console.log(this.state.items);
        }*/
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
      console.log("CHECK 3:"+ this.state.items.length);
  //  }, 1000);
  }

  renderItem(item) {
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{flex:0,padding:10}}>
            <Text style={{marginTop: 17}}>{item.debut}</Text>
            <Text style={{marginTop:80}}>{item.fin}</Text>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => Alert.alert(item.name)}
        >
          <Text> TEST</Text>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
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
    if(date.getDay()!==6)
      return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 3,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 130
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
