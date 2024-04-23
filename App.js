import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function MyButton() {
  return (
    <button style={styles.button}>
      Click Here
    </button>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/1.jpg')}
        style={styles.image}
      />
      <MyButton />
      <Text style={styles.text}>Get Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Adjust as needed
  },
  text: {
    marginTop: 20, // Adjust as needed
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
