import React from 'react';
import { TouchableOpacity, Text, Image, View, Card } from 'react-native';
//&import { Card } from 'react-native-elements';
import { ToDoSty } from '../cardToDo.style';

export const CardToDo = ({ toDo }) => {
  return (
    <TouchableOpacity>
      <Card>
        <View style={ToDoSty.container}>
          {/* <Image source={require('')} style={{ width: 20, height: 20, marginRight: 10 }} /> */}
          <Text>{toDo.title}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
