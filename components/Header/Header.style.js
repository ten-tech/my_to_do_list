import { StyleSheet } from 'react-native';

export const HeaderSty = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  logo: {    
    width: 150,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center',
    width: 320,
    color: 'black',
    backgroundColor: 'lightgrey',
     borderRadius: 5,
     fontStyle: 'italic'     
  },
});
