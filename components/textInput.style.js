import { StyleSheet } from 'react-native';
export const TextInputSty = StyleSheet.create({
    input: {        
      height: 40,
      width: 250,
      marginLeft: 5,
      backgroundColor: 'black', 
      borderColor: 'black',
      borderRadius: 5,      
      paddingHorizontal: 10,
      marginBottom: 5,
      marginTop: 5,
      color: 'white',  
    },
    view: {      
      alignItems: 'center',
      marginTop: 10,  
      width: 300,
      height: 50,
      borderWidth: 1,
      backgroundColor: '#E0FFFF',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      gap: 10,      
    },
    date: {      
      backgroundColor: '#F0E68C',
      height: 25,
      width: 25,      
      alignItems: 'center',
      paddingTop: 3,
      borderRadius: 5
    }
  });