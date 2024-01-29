import React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const BaseScreen = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>{title}</Text>
        <Pressable onPress={() => alert('Hello')}>
          <Image source={require('../assets/images/menuIcon.png')} style={styles.menuIcon}/>
        </Pressable>
      </View>

      <View style={styles.containerContent}>
        <Button onPress={() => {
          FIREBASE_AUTH.signOut().then(() => {
            navigation.navigate('Welcome'); // Navigate after sign-out
          });
        }} title='Logout' />
        <Button onPress={() => navigation.navigate('Info')} title='Info' />
        <Button onPress={() => navigation.navigate('Home')} title='Home' />
      </View>

    </View>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28a69d',
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '5%',
    paddingStart: '5%',
    paddingEnd: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginTop: '35%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerContent: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%',
  },
});