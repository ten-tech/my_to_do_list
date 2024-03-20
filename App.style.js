import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    // flex: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    padding: '10px',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    top: 630,    
    left: 0,
    right: 0,
    height: 50, // Hauteur du footer, à adapter selon vos besoins
    backgroundColor: 'lightcoral',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
