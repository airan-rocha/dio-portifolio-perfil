import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f49848',
    padding: 20,
    borderRadius: 10,
    minHeight: 180,
  },
  textName: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#321b06',
    fontSize: 24,
    marginBottom: 10,
  },
  textDescription: {
    color: '#fff',
    marginBottom: 15,
  },
  starContainer :{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    // backgroundColor: '#ff0000',
  }
});