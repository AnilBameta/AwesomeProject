/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.myTextStyle}>Username</Text>
      <TextInput
        style={styles.myTextboxStyle}
        placeholder="Please enter username"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.myTextStyle}>Email</Text>
      <TextInput
        style={styles.myTextboxStyle}
        placeholder="Enter Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.myTextStyle}>Mobile Number</Text>
      <TextInput
        style={styles.myTextboxStyle}
        placeholder="Enter your 10 digit mobile number"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Pressable style={styles.button}>
        <Text style={{color: 'white'}}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: 'center',
  },
  myTextStyle: {
    color: 'purple',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 20,
  },
  myTextboxStyle: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 50,
    height: 40,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderColor: 'thistle',
    borderRadius: 50,
    color: 'red',
    marginTop: 20,
    backgroundColor: 'purple',
  },
});

export default App;
