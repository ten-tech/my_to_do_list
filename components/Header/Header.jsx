import React from 'react';
import { View, Text, Image} from 'react-native';
import { HeaderSty } from './Header.style';

export function Header(){
  return (
    <View style={HeaderSty.container}>
      <Image source={require('../../assets/logo.png')} style={HeaderSty.logo} />
      <Text style={HeaderSty.title}>Taches à éffectuer</Text>
    </View>
  );
};