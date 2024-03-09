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
    fontSize: 30,
    flexWrap: 'wrap',
    color: 'black',
    backgroundColor: 'lightgrey',
     borderRadius: 5,
  },
});
