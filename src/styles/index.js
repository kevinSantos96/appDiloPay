import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedorTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#336EFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    alignItems: 'center',
  },
  contentForm: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 100,
  },
  texto: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  },
  label: {
    marginTop: 5,
    color: '#4E616B',
    textTransform: 'uppercase',
    marginHorizontal: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  fieldStatus: {
    color: '#fff',
    borderRadius: 10,
    width: '35%',
    padding: 5,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
