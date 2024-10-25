import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: 180,
    paddingBottom: 20,
    alignItems: 'center',
    // borderWidth:1,
    borderColor: '#0000002e',
  },
  bgImage: {
    width: '100%',
    height: 90,
    backgroundColor: '#0000002e',
  },
  userContainer: {
    // flex: 1,
    // backgroundColor: '#fff000',
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
  },
  imagePerfil: {
    width: 110,
    height: 110,
    borderRadius: 300,
    borderColor: '#15171e',
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
    // backgroundColor: '#fff000',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  mailContainer: {
    flexDirection: 'row',
  },
  textName: {
    fontSize: 24,
    color: '#fff',
    marginTop: 1,
  },
});