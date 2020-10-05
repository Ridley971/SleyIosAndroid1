import React from 'react'
import {View, StyleSheet} from 'react-native'
import{
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props) {

  return (
    <View style= {{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style= {styles.drawerContent}>
          <View style= {styles.userInfoSection}>
            <View style={{alignItems:'center'}}>
              <Avatar.Image
                source={require( '../../assets/defaultAvatar.png')}
                size= {100}
                />
              <View>
                <Title style={styles.title}>Le Rid</Title>
                <Caption style={styles.caption}> Caption</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style= {styles.drawerSection}>
              <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="home-outline"
                color={color}
                size={size}/>
              )}
              label="Accueil "
              omPress= {() => {Alert.alert('OK')}}/>

              <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                    name="calendar"
                    color={color}
                    size={size}/>
                  )}
                  label="Réserver "
                  omPress= {() => {props.navigation.navigate('Réserver')}}/>

              <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                    name="calendar-multiple-check"
                    color={color}
                    size={size}/>
                  )}
                  label="Mes réservations "
                  omPress= {() => {}}/>

              <DrawerItem
                      icon={({color, size}) => (
                        <Icon
                        name="vote"
                        color={color}
                        size={size}/>
                      )}
                      label="Mes votes "
                      omPress= {() => {}}/>

              <DrawerItem
                      icon={({color, size}) => (
                        <Icon
                        name="video"
                        color={color}
                        size={size}/>
                      )}
                      label="Tutos "
                      omPress= {() => {}}/>


          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style= {styles.bottomDrawerSection}>
        <DrawerItem
        icon={({color, size}) => (
          <Icon
          name="exit-to-app"
          color={color}
          size={size}/>
        )}
        label="Se déconnecter "
        omPress= {() => {}}
        />
      </Drawer.Section>
    </View>
  );

}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 3
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 3
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
