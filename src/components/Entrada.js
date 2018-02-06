import React from 'react';
import { View, StatusBar } from 'react-native';
import Numero from './Numero';

const Estilos = {

  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const { numeros } = Estilos;

export default props => (
  <View style={numeros}>
    <StatusBar hidden={true} />
    <Numero></Numero>
    <Numero></Numero>
  </View>
);