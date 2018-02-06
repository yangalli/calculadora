import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Estilos = {

  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },

  textoTitulo: {
    fontSize: 25,
    color: '#FFF'
  }

}

const { topo, textoTitulo } = Estilos;

export default props => (
  <View style={topo}>
    <StatusBar hidden={true} />
    <Text style={textoTitulo}>Calculadora 1.0</Text>
  </View>
);
