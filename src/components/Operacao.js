import React from 'react';
import { Picker, StatusBar } from 'react-native';

const Estilos = {

  operacao: {
    marginVertical: 10,
    marginLeft: 15
  }

}

const { operacao } = Estilos;

export default class Operacao extends React.Component {
  
  render() {
    return (
      <Picker style={operacao} 
      selectedValue={this.props.operacao} 
      onValueChange={op => { this.props.atualizaOperacao(op);}} 
      >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
        <Picker.Item label='Multiplicação' value='multiplicacao' />
        <Picker.Item label='Divisão' value='divisao' />

      </Picker>
    );
  }
}
