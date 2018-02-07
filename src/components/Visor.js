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

export default class Visor extends React.Component {

  constructor(props) {
    super(props);

    this.state = { resultado: '' };
  }

  render() {
    return(
      <View>
        <StatusBar hidden={true} />
        <TextInput style={textoVisor} placeholder='Resultado' value={this.state.resultado} editable={false} />
      </View>
    );
  }
}