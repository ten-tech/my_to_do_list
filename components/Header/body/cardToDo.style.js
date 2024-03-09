import { StyleSheet } from 'react-native';

export const ToDoSty = StyleSheet.create({
  container: {
    flexDirection: 'row',    
    alignItems: 'center'    
  },
  title: {
    fontSize: 30,
    flexWrap: 'wrap',
    color: 'black',
    backgroundColor: 'lightgrey',
     borderRadius: 5,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});

export const toDo = StyleSheet.create({
    backgroundColor: 'white',
display:"flex",
flexDirection: 'row',
justifyContent:'space-between',
// borderRadius:,
// alignItems:,
// height:,
});
