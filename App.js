import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import Comercio from './src/components/Comercio';
import Information from './src/components/Information';
import Input from './src/components/Input';
import Options from './src/components/Options';
import Card from './src/components/Cards';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image source = {require('./src/assets/img/Location.png')} />
        <View style={styles.locationInfo}>
          <Text style={styles.location}>Localização</Text>
          <Text style={styles.rua}>Rua Francisco Sales..</Text>
        </View>
      </View>
      <Image style={styles.imageUser} source = {require('./src/assets/img/imgUser.png')} />
      <StatusBar style="auto" />
    </View>

    <Comercio/>
    <Information/>
    <Input/>
    <Options/>
    <Card/>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 52,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
  },
  
  locationInfo: {
    marginLeft: 8,
    top: -2
  },

  location: {
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.1,
  },

  rua: {
    fontWeight: 'bold'
  },

  imageUser: {
    width: 38,
    height: 38,
    borderRadius: 50
  }
});
