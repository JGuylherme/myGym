import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import * as Animatable from "react-native-animatable";
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.containerHeader}>
        <Text style={styles.message}>HOME</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerContent}>
        <Button onPress={() => {
          FIREBASE_AUTH.signOut().then(() => {
            navigation.navigate('Welcome'); // Navigate after sign-out
          });
        }} title='Logout' />
        <Button onPress={() => navigation.navigate('Info')} title='Info' />
        <Button onPress={() => navigation.navigate('Home')} title='Home' />
      </Animatable.View>

    </View>
  )
}

export default Home;

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
  containerContent: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%'
  }
})