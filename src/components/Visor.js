import React from 'react';
import { View, TextInput, StatusBar } from 'react-native';

const Estilos = {

  textoVisor: {
    fontSize: 20,
    height: 80,
    alignItems: 'center'
  }

}

const { textoVisor } = Estilos;

export default props => (
  <View>
    <StatusBar hidden={true} />
    <TextInput style={textoVisor} placeholder='Resultado' />
  </View>
);