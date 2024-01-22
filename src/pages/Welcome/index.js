import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

export default function Welcome() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log('user', user);
            setUser(user);
        });
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          delay={200}
          source={require('../../assets/images/logoTopBlue.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={1600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Organize sua vida na academia!</Text>
        {user ? (
          <Text style={styles.text}>Bem-vindo de volta</Text>
        ) : (
          <Text style={styles.text}>Faça login para começar</Text>
        )}
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28a69d',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#28a69d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});