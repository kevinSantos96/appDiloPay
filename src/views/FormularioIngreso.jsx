import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from '../components/hooks/useForm.jsx';
import { crearNuevaOrden } from '../components/hooks/api.jsx';
import ButtonSuccess from '../components/ButtonSucces.jsx';
import GlobalStyles from '../styles/index.js';

const FormularioIngreso = () => {
  const navigation = useNavigation();
  const [values, handleInputChange, reset] = useForm({
    monto: '',
    moneda: 'HNL',
    destinatario: '',
    descripcion: '',
  });
  const crearNuevaSolcitud = async()=>{
    
    try {
      const parametros = {
        monto: Number.parseFloat(values.monto),
        moneda: values.moneda,
        destinatario: values.destinatario,
        descripcion: values.descripcion,
        estado: 'PENDIENTE',
      };
      const resp = await crearNuevaOrden(parametros);
      if (resp.success) {
        reset();
        Alert.alert(
          'Orden creada con exito',
          '',
          [
            {
              text: 'Confirmar',
              onPress: () => navigation.navigate('Home'),
            },
          ],
          { cancelable: false }, // evita que se cierre tocando fuera
        );
      }
    } catch (error) {
      console.info(error);
    }
  }

  const handleSubmit =  () => {
    // Validar que todos los campos estén llenos
    if (!values.monto || !values.destinatario || !values.descripcion) {
      Alert.alert('Error', 'Por favor complete todos los campos.');
      return;
    }

        Alert.alert(
          'Crear Orden',
          '¿Está seguro de que desea crear una nueva orden?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Confirmar', onPress: () => crearNuevaSolcitud() },
          ],
        );

  };
  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView style={{ marginHorizontal: 4, marginVertical: 3 }}>
        <View style={GlobalStyles.contenedorTitulo}>
          <Text style={GlobalStyles.texto}>Nueva Orden</Text>
        </View>
        <View style={GlobalStyles.contentForm}>
          <Text style={GlobalStyles.label}>Monto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el monto"
            placeholderTextColor={'#B0BFBD'}
            keyboardType="number-pad"
            value={values.monto}
            onChangeText={text => handleInputChange('monto', text)}
          />
          <Text style={GlobalStyles.label}>Moneda:</Text>
          <TextInput
            style={styles.input}
            value={values.moneda}
            editable={false}
            selectTextOnFocus={false}
          />
          <Text style={GlobalStyles.label}>Destinatario:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el destinatario"
            placeholderTextColor={'#B0BFBD'}
            value={values.destinatario}
            onChangeText={text => handleInputChange('destinatario', text)}
          />
          <Text style={GlobalStyles.label}>Descripción:</Text>
          <TextInput
            style={styles.inputArea}
            placeholder="Ingrese una descripción"
            placeholderTextColor={'#B0BFBD'}
            value={values.descripcion}
            onChangeText={text => handleInputChange('descripcion', text)}
          />
          <ButtonSuccess title="Enviar" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  input: {
    backgroundColor: '#F5F5F5',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 5,
  },
  inputArea: {
    backgroundColor: '#F5F5F5',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 5,
    textAlignVertical: 'top', // 🔹 asegura que el texto empiece arriba
    minHeight: 100,
  },
});

export default FormularioIngreso;
