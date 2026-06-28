import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { obtenerOrden } from '../components/hooks/api.jsx';
import { formateoMonto } from '../helpers/formaterMoneda.jsx';
import { formatearFechaCorta } from '../helpers/formateFecha.jsx';
import GlobalStyles from '../styles/index.js';
import ButtonSuccess from '../components/ButtonSucces.jsx';

const estadoColors = {
  PENDIENTE: '#FFD700', 
  PAGADA: '#00A828',    
  CANCELADA: '#BA1650', 
  REVERSADA: '#8610CC', 
};


const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { referenciaId} = route.params;
  const [orden, setOrden] = useState([]);

  const obtenerOrdenReferencia = async () => {
    try {
      const resp = await obtenerOrden(referenciaId);
      if (resp.success) {
        setOrden(resp.data);
      }
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    obtenerOrdenReferencia();
  }, []);

  const handleActualizarEstado = () => {
    const estadoActual = orden.estado
    navigation.navigate('ActualizarOrden', { referenciaId, estadoActual }) 
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 4, marginVertical: 4 }}>
        <View style={GlobalStyles.contenedorTitulo}>
          <Text style={GlobalStyles.texto}>Detalle de la Orden</Text>
        </View>
        <View style={GlobalStyles.contentForm}>
          <Text style={GlobalStyles.label}>Referencia:</Text>
          <Text style={styles.value}>REF-{referenciaId}</Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Monto:</Text>
          <Text style={styles.value}>{formateoMonto(orden.monto)}</Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Moneda:</Text>
          <Text style={styles.value}>{orden.moneda}</Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Destinatario:</Text>
          <Text style={styles.value}>{orden.destinatario}</Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Fecha:</Text>
          <Text style={styles.value}>
            {formatearFechaCorta(orden.fechaCreado)}
          </Text>
          <View style={GlobalStyles.hr} />
          <Text style={GlobalStyles.label}>Estado:</Text>
          <Text style={[GlobalStyles.fieldStatus,{backgroundColor: estadoColors[orden.estado]||'#336EFF'}]}>{orden.estado}</Text>
          <ButtonSuccess
            title="Actualizar Estado"
            onPress={handleActualizarEstado}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  value: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 5,
  },
});

export default DetailsScreen;
