import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fond: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'flex-end',
  },
  results: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    right: 10,
    marginBottom: 10,
  },
  smallResults: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    right: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
