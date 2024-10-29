import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000026",
    padding: 10,
    borderRadius: 9,
    marginTop: 10,
  },
  textTitle: {
    fontSize: 12,
    color: "#13192f",
    borderBottomWidth: 1,
    borderColor: "#13192f",
  },
  textContent: {
    // fontSize: 17,
    color: "#fff",
    textAlign: 'justify',
    paddingVertical: 9,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    // fontSize: 16,
    color: "#fff",
    textDecorationLine: 'underline',
    backgroundColor: '#13192f',
    paddingVertical: 7,
    paddingHorizontal: 14,
    margin: 3,
    borderRadius: 4,
  },
});