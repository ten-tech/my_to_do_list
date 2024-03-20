import { StyleSheet } from "react-native";

export const HistoryItemCompoSty = StyleSheet.create({  
  task: {
    backgroundColor: '#008080',
    marginBottom: 5,
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 5,
    height: 'auto',
  },
  taskText: {
    color: 'white',
  }, 
  title: {
    color: 'white',
    backgroundColor: '#00693E',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',     
  },
});
