import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';

const SeleccionEstado = ({ setSelectedId }) => {
  const [valueId,setValueId] = useState(null)
  const radioButtonsData = useMemo(
    () => [
      {
        id: '1',
        label: 'PAGADA',
        value: 'PAGADA',
        color: '#008A28',
        labelStyle: styles.label,
        containerStyle: styles.itemContainer,
      },
      {
        id: '2',
        label: 'CANCELADA',
        value: 'CANCELADA',
        color: '#BA1650',
        labelStyle: styles.label,
        containerStyle: styles.itemContainer,
      },
      {
        id: '3',
        label: 'REVERSADA',
        value: 'REVERSADA',
        color: '#8610CC',
        labelStyle: styles.label,
        containerStyle: styles.itemContainer,
      },
    ],
    [],
  );
  const handlePress = (id)=>{
    setValueId(id)
    const selecionado = radioButtonsData.find(rb=> rb.id===id)
    setSelectedId(selecionado.value)
  }
  return (
    <View>
      <RadioGroup
        radioButtons={radioButtonsData}
        onPress={handlePress}
        selectedId={valueId}
        layout="column"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
    textAlign: 'left',
    flexShrink: 1,
    width: '100%',
  },
});

export default SeleccionEstado;
