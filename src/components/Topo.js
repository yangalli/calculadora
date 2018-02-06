import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from './Cabecalho';

// export default function (props) {    -> chamada de função sem uso de arrow function
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   );
// }

const Topo = props => (
  <Cabecalho />
);

export { Topo };