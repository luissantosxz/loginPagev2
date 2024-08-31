import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Botao from '../components/Botao'; 
import CampoTexto from '../components/CampoTexto'; 


const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logoLinkedin.png')} style={styles.logoImagem} />
          <Text style={styles.logoTexto}>LinkedIn</Text>
        </View>
        <CampoTexto placeholder="Email" />
        <CampoTexto placeholder="Sua senha" secureTextEntry={true} />
        <Botao titulo="Entrar" nomeIcone="log-in" onPress={() => {}} />
        <Text style={styles.semSenha}>Esqueceu a sua senha?</Text>
        <Botao titulo="Criar conta" nomeIcone="person-add" onPress={() => {}} estilo={styles.botaoCriarConta} estiloTexto={styles.criarContaTexto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 50,
    backgroundColor: '#0A66C2',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 40,
    borderRadius: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoTexto: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  semSenha: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  botaoCriarConta: {
    backgroundColor: '#ffffff',
  },
  criarContaTexto: {
    color: '#0077B5',
  },
});

export default Login;
