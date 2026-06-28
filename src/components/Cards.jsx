import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {formateoMonto} from "../helpers/formaterMoneda"

const estadoColors = {
  PENDIENTE: '#FFD700', 
  PAGADA: '#00A828',    
  CANCELADA: '#BA1650', 
  REVERSADA: '#8610CC', 
};

export const CardsOrdenes = ({ item }) => {
  const navigation = useNavigation();
  const { referenciaId, estado, monto } = item;

  function handlePress() {
    navigation.navigate('DetalleOrden', { referenciaId });
  }
  let montoFormateado =formateoMonto(monto)
  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.2}
        underlayColor="transparent"
        onPress={handlePress}
      >
        <View style={styles.containerCard}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              width: '60%',
            }}
          >
            <Text style={styles.label}>REF-{referenciaId}</Text>
            <Text style={styles.cantidad}>{montoFormateado}</Text>
          </View>
          <View style={styles.ContainerStatus}>
            <Text style={[styles.labelStatus,{backgroundColor: estadoColors[estado]||'#336EFF'}]}>{estado}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    height: 90,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  ContainerStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
  },
  labelStatus: {
    color: '#fff',
    borderRadius: 10,
    width: '65%',
    padding: 5,
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 5,
  },
  cantidad: {
    color: '#575958',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 3,
  },
  fecha: {
    color: '#7E8280',
    fontSize: 12,
    marginLeft: 30,
    marginTop: 2,
  },
  label: {
    marginTop: 5,
    color: '#4E616B',
    textTransform: 'uppercase',
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
