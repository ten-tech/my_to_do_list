import { StyleSheet } from "react-native";

export const TaskItemCompoSty = StyleSheet.create({  
  task: {
    backgroundColor: '#00356B',
    marginBottom: 5,
    width: 310,
    padding: 10,
    borderRadius: 5,
  },
  taskText: {
    color: 'white',
    textAlign: 'left',
    width: 250  
  }, 
  view_: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }, 
  completedTask: {
    color: 'white',
  }, 
  taskDate: {
    color: '#F0E68C',
    textAlign: 'right',
    position: 'absolute',
    top: 10, 
    right: 10, 
    fontStyle: 'italic',
    fontSize: 11,
  },
});
