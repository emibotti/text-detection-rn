import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  capture: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 0,
    margin: 20,
    padding: 15,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'flex-end',
  },
  snapButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  snapText: {
    fontSize: 14,
  },
})
