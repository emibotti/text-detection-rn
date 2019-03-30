import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'flex-start',
  },
  image: {
    aspectRatio: 1,
    flex: 2,
    marginBottom: 0,
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 2,
  },
  uploadButton: {
    alignItems: 'center',
    backgroundColor: '#5c6668',
    borderRadius: 8,
    bottom: -30,
    marginTop: 5,
    padding: 20,
    position: 'absolute',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 14,
  },
})
