import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { actualizarOrden } from '../components/hooks/api.jsx';
import ButtonSuccess from '../components/ButtonSucces.jsx';
import SeleccionEstado from '../components/SelecionEstado.jsx';
import GlobalStyles from '../styles/index.js';

const estadoColors = {
  PENDIENTE: '#FFD700', 
  PAGADA: '#00A828',    
  CANCELADA: '#BA1650', 
  REVERSADA: '#8610CC', 
};



const ActualizarOrden = ({ route }) => {
  const { referenciaId,estadoActual } = route.params;
  const navigation = useNavigation();
  const [nuevoEstado, setNuevoEstado] = useState(null);

  const actualizarNuevoEstado = async()=>{
    try {
      const params = {
        estado:nuevoEstado
      }
      const resp =  await actualizarOrden(referenciaId,params)
      if (resp.success){
        navigation.navigate('Home')
      }
    } catch (error) {
      console.info(error)
    }
  }

  const handleConfirmarCambio = () => {
    if (nuevoEstado==="REVERSADA" && estadoActual!=="PAGADA"){
      Alert.alert("No se puede proceder","La orden se encuentra en un estado distinto a PAGADA")
      return
    }
    if (estadoActual===nuevoEstado){
      Alert.alert("No se puede proceder","La orden ya se encuentra en el estado seleccionado")
      return 
    }
    if (estadoActual==="PAGADA" && nuevoEstado==="CANCELADA"){
            Alert.alert("No se puede proceder","La orden PAGADA no se puede cancelar")
      return 
    }
    Alert.alert(
      'Confirmar cambio',
      '¿Está seguro de que desea cambiar el estado de la orden?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => actualizarNuevoEstado() },
      ],
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 4, marginVertical: 4 }}>
        <View style={GlobalStyles.contenedorTitulo}>
          <Text style={GlobalStyles.texto}>REF-{referenciaId}</Text>
        </View>
        <View style={GlobalStyles.contentForm}>
          <Text style={GlobalStyles.label}>Estado actual:</Text>
          <Text style={[GlobalStyles.fieldStatus,{backgroundColor: estadoColors[estadoActual]||'#336EFF'}]}>{estadoActual}</Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Cambiar a:</Text>
          <SeleccionEstado
            setSelectedId={setNuevoEstado}
          />
        </View>
        <ButtonSuccess
          title="Confirmar cambio"
          onPress={handleConfirmarCambio}
        />
      </View>
    </SafeAreaView>
  );
};

export default ActualizarOrden;
