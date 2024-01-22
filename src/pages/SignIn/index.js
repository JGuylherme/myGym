import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import * as Animatable from "react-native-animatable";
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Login falhou: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Registro falhou: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>


      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder='Digite seu email...'
            style={styles.input}
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder='Digite sua senha...'
            style={styles.input}
            autoCapitalize='none'
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={() => {
            signIn();
          }}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPassword}>
            <Text style={styles.passwordText}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAccount} onPress={() => signUp()}>
            <Text style={styles.AccountText}>Não tem uma conta? Registre-se</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28a69d'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    bordernRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justiffyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonPassword: {
    marginTop: 14,
    alignSelf: 'center'
  },
  passwordText: {
    color: '#a1a1a1'
  },
  buttonAccount: {
    marginTop: 14,
    alignSelf: 'center'
  },
  AccountText: {
    color: '#a1a1a1'
  }

})