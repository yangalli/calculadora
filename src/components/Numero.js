import React from 'react';
import { View, TextInput, StatusBar } from 'react-native';

const Estilos = {

  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
}

const { numero } = Estilos;

export default props => (
  <TextInput style={numero}></TextInput>
);