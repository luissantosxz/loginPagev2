import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CampoTexto = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.campoTexto}
      placeholder={placeholder}
      placeholderTextColor="#ffffff"
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  campoTexto: {
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#ffffff',
    fontSize: 18,
  },
});

export default CampoTexto;
