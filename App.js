import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react'; 

export default function App() {

const button= ()=>{
  alert('butão foi presionado')
}
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image style={{height: '100%', width: '100%', borderRadius: 20,  }} source={require('./assets/perfil.jpeg')}/>
      </View>
      <View style={{display: 'flex', alignItems: 'center' }}>
        <Text style={styles.nome}>João Victor</Text>
        <View style={{backgroundColor: '#4595A4', width: 170, height: 2}}></View>
      </View>

      <View style={styles.navButton}>
        <View style={styles.button}>
          <Button
            onPress= {button}
            title='Sobre'
            color='#000'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress= {button}
            title='projetos'
            color='#000'
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E4E6D',
    alignItems: 'center',
    justifyContent: 'start',
  },
  perfil: {
    backgroundColor: '#FFF',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 140,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 40
    
  },
  nome: {
    fontSize: 30,
    color: '#FFF',
  },
  navButton:{
    height: 350,
    width: '100%',
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#FFDD3E',
    opacity: .9,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
