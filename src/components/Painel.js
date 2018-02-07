import React from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends React.Component {

  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma' }

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        resultado = 0;
    }
  }

  atualizaValor(nomeCampo, numero) {
    
    const obj = {};
    obj[nomeCampo] = numero;
    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao })
  }

  render() {
    return(
      <View>
        <Entrada num1={this.state.num1} num2={this.state.num2} atualizaValor={this.atualizaValor} />
        <Operacao operacao={this.state.operacao} atualizaOperacao={this.atualizaOperacao} />
        <Comando calculo={this.calcular} />
      </View>
    );
  }
}

export { Painel };