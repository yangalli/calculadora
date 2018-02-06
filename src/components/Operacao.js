import React from 'react';
import { Picker, StatusBar } from 'react-native';

const Estilos = {

  operacao: {
    marginVertical: 10,
    marginLeft: 15
  }

}

const { operacao } = Estilos;

export default props => (
  <Picker style={operacao}>
    <Picker.Item label='Soma' value='soma' />
    <Picker.Item label='Subtração' value='subtracao' />
  </Picker>
);
