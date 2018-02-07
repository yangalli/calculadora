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
    <Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
    <Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
  </View>
);