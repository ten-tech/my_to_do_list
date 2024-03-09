import React from 'react';
import { TextInput, View } from 'react-native';
import { TextInputSty } from './textInput.style'; 

export function TextInputCompo({ value, onChangeText }){
  return (
    <View style={TextInputSty.view}>
      <TextInput
        style={TextInputSty.input}        
        onChangeText={onChangeText}
        value={value}
        autoFocus
      />
    </View>
  );
};
