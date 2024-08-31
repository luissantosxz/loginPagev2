import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone padrão do vector-icon

const Botao = ({ onPress, titulo, estilo, estiloTexto, nomeIcone }) => {
  return (
    <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
      <Ionicons name={nomeIcone} size={24} color="white" style={styles.icone} />
      <Text style={[styles.texto, estiloTexto]}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row', // Uso do eixo flexbox "row"
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 8,
    backgroundColor: '#0077B5',
    marginBottom: 20,
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icone: {
    marginRight: 10,
  },
});

export default Botao;
