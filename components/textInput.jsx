import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { TextInputSty } from './textInput.style';
import DateTimePicker from '@react-native-community/datetimepicker';

export function TextInputCompo({ value, onChangeText }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const currentDate = new Date();
      if (selectedDate.getTime() >= currentDate.getTime()) { // Vérifier si la date sélectionnée est postérieure ou égale à la date actuelle
        setDate(selectedDate);
      }
    }
  };

  return (
    <View style={TextInputSty.view}>
      <TextInput
        style={TextInputSty.input}
        onChangeText={onChangeText}
        value={value}
        autoFocus
      />
      <TouchableOpacity style={TextInputSty.date} onPress={() => setShowDatePicker(true)}>
        <Text >🗓️</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          minimumDate={new Date()} // Empêcher la sélection de dates antérieures à aujourd'hui
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}
