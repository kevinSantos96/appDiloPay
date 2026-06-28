import React from 'react';
import { Text,View, StyleSheet,FlatList } from 'react-native';
import { CardsOrdenes } from './Cards.jsx';

export default function ListadoOrdenes({ordenes}) {
  return (
    <View>
      {ordenes ? ( 
        <FlatList
          data={ordenes}
          style={{marginTop: 20}}
          keyExtractor={(item) => item.referenciaId}
          renderItem={({ item }) => { 
            return item !=='' && <CardsOrdenes item={item} />
          }}
        />
      ):(
        <Text style={styles.texto}>No hay ordenes</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: '#4E616B',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});