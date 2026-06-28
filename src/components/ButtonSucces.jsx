import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ButtonSuccess = ({ onPress, title }) => {
  return (
    <View style={styles.contenedorBotones}>
      <TouchableOpacity
        style={[styles.btn, styles.btnSubmit]}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    marginTop: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    width: '40%',
    flex: 1,
  },
  btnSubmit: {
    backgroundColor: '#21AFC5',
    padding: 12,
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ButtonSuccess;