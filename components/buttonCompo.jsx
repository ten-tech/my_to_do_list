import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { ButtonCompoSty } from './buttonCompo.style';


export function ButtonComponent({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonCompoSty.button}>
      <Text placeHolder= "Faire les courses">Ajouter</Text>
    </TouchableOpacity>
  );
};
